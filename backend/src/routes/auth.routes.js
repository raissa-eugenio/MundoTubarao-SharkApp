const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../prisma"); // cliente Prisma
const router = express.Router();
const SECRET = process.env.JWT_SECRET;

// POST /auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1️⃣ Verificar admin
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (admin) {
      if (admin.password !== password) {
        return res.status(401).json({ error: "Email ou senha inválidos" });
      }

      const token = jwt.sign({ role: "admin", id: admin.id }, SECRET, {
        expiresIn: "1d"
      });

      return res.json({ role: "admin", token });
    }

    // 2️⃣ Verificar usuário
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: "Email ou senha inválidos" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Email ou senha inválidos" });

    res.json({
      role: "user",
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro no servidor" });
  }
});

module.exports = router;
