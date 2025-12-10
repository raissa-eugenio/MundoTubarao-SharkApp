// src/db.js
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Banco no arquivo project-root/database.sqlite
const db = new Database(path.join(__dirname, "..", "database.sqlite"));

// Cria tabela users
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`).run();

// Cria tabela cards
db.prepare(`
  CREATE TABLE IF NOT EXISTS cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    img TEXT,
    nome TEXT,
    cientifico TEXT,
    classificacao TEXT,
    caracteristicas TEXT,
    habitat TEXT,
    populacao TEXT,
    curiosidades TEXT
  )
`).run();

// Cria tabela admin (armazenamos email, senha e token aqui)
db.prepare(`
  CREATE TABLE IF NOT EXISTS admin (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    token TEXT
  )
`).run();

// Seed do admin (insere se não existe)
const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "121212";

const existingAdmin = db.prepare("SELECT * FROM admin WHERE email = ?").get(ADMIN_EMAIL);
if (!existingAdmin) {
  db.prepare("INSERT INTO admin (email, password, token) VALUES (?, ?, NULL)")
    .run(ADMIN_EMAIL, ADMIN_PASSWORD);
}

export { db };
