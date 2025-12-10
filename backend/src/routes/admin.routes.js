import { Router } from "express";
import { db } from "../db.js";

const router = Router();

// ✅ GET cards
router.get("/cards", (req, res) => {
  const cards = db.prepare("SELECT * FROM cards").all();
  res.json({ cards });
});

// ✅ POST criar
router.post("/cards", (req, res) => {
  const {
    img, nome, cientifico,
    classificacao, caracteristicas,
    habitat, populacao, curiosidades
  } = req.body;

  const stmt = db.prepare(`
    INSERT INTO cards
    (img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const info = stmt.run(
    img, nome, cientifico, classificacao,
    caracteristicas, habitat, populacao, curiosidades
  );

  const card = db.prepare("SELECT * FROM cards WHERE id = ?")
    .get(info.lastInsertRowid);

  res.json({ card });
});

// ✅ PUT editar
router.put("/cards/:id", (req, res) => {
  const { id } = req.params;
  const {
    img, nome, cientifico,
    classificacao, caracteristicas,
    habitat, populacao, curiosidades
  } = req.body;

  db.prepare(`
    UPDATE cards SET
    img=?, nome=?, cientifico=?, classificacao=?,
    caracteristicas=?, habitat=?, populacao=?, curiosidades=?
    WHERE id=?
  `).run(
    img, nome, cientifico, classificacao,
    caracteristicas, habitat, populacao, curiosidades, id
  );

  const card = db.prepare("SELECT * FROM cards WHERE id = ?").get(id);
  res.json({ card });
});

// ✅ DELETE
router.delete("/cards/:id", (req, res) => {
  db.prepare("DELETE FROM cards WHERE id=?").run(req.params.id);
  res.json({ message: "Card excluído" });
});

export default router;
