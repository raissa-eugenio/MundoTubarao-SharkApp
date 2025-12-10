// src/index.js
import express from "express";
import cors from "cors";
import crypto from "crypto";
import { db } from "./db.js";
import adminRoutes from "./routes/admin.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// --------------------
// LOGIN
// --------------------
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  // 1) tenta autenticar admin (consulta no DB)
  const adminRow = db.prepare("SELECT id, email, password FROM admin WHERE email = ?").get(email);
  if (adminRow && adminRow.password === password) {
    // gera token
    const token = crypto.randomBytes(32).toString("hex");

    // salva token no DB para esse admin
    db.prepare("UPDATE admin SET token = ? WHERE id = ?").run(token, adminRow.id);

    return res.json({
      id: adminRow.id,
      name: "Administrador",
      email: adminRow.email,
      role: "ADMIN",
      token
    });
  }

  // 2) tenta autenticar usuário normal
  const stmt = db.prepare("SELECT id, name, email, password FROM users WHERE email = ?");
  const user = stmt.get(email);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Email ou senha incorretos" });
  }

  res.json({ id: user.id, name: user.name, email: user.email, role: "USER" });
});

// --------------------
// LOGOUT ADMIN (limpa token)
// --------------------
app.post("/auth/logout", (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({ error: "Token não enviado" });

  // limpa token no admin onde token = ?
  db.prepare("UPDATE admin SET token = NULL WHERE token = ?").run(token);
  res.json({ message: "Logout realizado" });
});

// Rotas admin protegidas
app.use("/admin", adminRoutes);

app.get("/", (req, res) => res.send("Servidor rodando!"));

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
