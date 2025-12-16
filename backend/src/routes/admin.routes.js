const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require("../database/connection");

const router = express.Router();

const SECRET = "shark_secret";

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";

  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro no servidor" });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: "Email ou senha inválidos" });
    }

    const token = jwt.sign(
      { role: "admin", id: results[0].id },
      SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login realizado com sucesso",
      token
    });
  });
});

module.exports = router;
