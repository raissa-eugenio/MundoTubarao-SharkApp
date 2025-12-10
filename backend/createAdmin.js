// createAdmin.js
import Database from "better-sqlite3";
import path from "path";

const db = new Database(path.join(process.cwd(), "database.sqlite"));

// cria tabela se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    token TEXT
  )
`).run();

// insere admin
try {
  db.prepare("INSERT INTO admin (email, password) VALUES (?, ?)").run(
    "admin@gmail.com",
    "121212"
  );
  console.log("Admin criado com sucesso!");
} catch (err) {
  console.log("Já existe um admin criado.");
}


