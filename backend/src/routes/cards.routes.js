const express = require("express");
const connection = require("../database/connection");
const router = express.Router();

// 🔹 LISTAR TODOS OS CARDS - PÚBLICO (não precisa de token)
router.get("/", (req, res) => {
  connection.query("SELECT * FROM cards", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results); // retorna array de cards
  });
});

// 🔹 CRIAR UM NOVO CARD - PROTEGIDO (poderia exigir token)
router.post("/", (req, res) => {
  const { img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades } = req.body;
  const sql = `
    INSERT INTO cards 
    (img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  connection.query(
    sql,
    [img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      connection.query("SELECT * FROM cards WHERE id=?", [result.insertId], (err2, created) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json(created[0]);
      });
    }
  );
});

// 🔹 ATUALIZAR UM CARD - PROTEGIDO
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades } = req.body;
  const sql = `
    UPDATE cards
    SET img=?, nome=?, cientifico=?, classificacao=?, caracteristicas=?, habitat=?, populacao=?, curiosidades=?
    WHERE id=?
  `;
  connection.query(
    sql,
    [img, nome, cientifico, classificacao, caracteristicas, habitat, populacao, curiosidades, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      connection.query("SELECT * FROM cards WHERE id=?", [id], (err2, updated) => {
        if (err2) return res.status(500).json({ error: err2 });
        res.json(updated[0]);
      });
    }
  );
});

// 🔹 EXCLUIR UM CARD - PROTEGIDO
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM cards WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Card excluído com sucesso!" });
  });
});

module.exports = router;
