// src/routes/admin.routes.js
import express from "express";
import { db } from "../db.js";

const router = express.Router();

// Middleware de autenticação real: verifica token no DB
router.use((req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: "Acesso negado: token ausente" });

  const admin = db.prepare("SELECT id FROM admin WHERE token = ?").get(token);
  if (!admin) return res.status(403).json({ error: "Acesso negado: token inválido" });

  // opcional: anexa adminId ao request
  req.adminId = admin.id;
  next();
});

// Listar todos os cards
router.get("/cards", (req, res) => {
  const cards = db.prepare("SELECT * FROM cards").all();
  res.json(cards);
});

// Criar card
router.post("/cards", (req, res) => {
  const { img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades } = req.body;
  const stmt = db.prepare(`
    INSERT INTO cards (img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades);
  res.json({ id: info.lastInsertRowid, ...req.body });
});

// Deletar card
router.delete("/cards/:id", (req, res) => {
  db.prepare("DELETE FROM cards WHERE id = ?").run(req.params.id);
  res.json({ message: "Card deletado" });
});

// Editar card
router.put("/cards/:id", (req, res) => {
  const { img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades } = req.body;
  db.prepare(`
    UPDATE cards SET img = ?, nome = ?, cientifico = ?, classificacao = ?, caracteristicas = ?, habitat = ?, populacao = ?, curiosidades = ?
    WHERE id = ?
  `).run(img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades, req.params.id);
  res.json({ message: "Card atualizado" });
});

// Listar usuários (apenas email e id)
router.get("/users", (req, res) => {
  const users = db.prepare("SELECT id, email FROM users").all();
  res.json(users);
});

export default router;
