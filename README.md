generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
}

model admin {
  id       Int     @id @default(autoincrement())
  email    String  @unique(map: "email") @db.VarChar(255)
  password String  @db.VarChar(255)
  token    String? @db.VarChar(255)
}

model cards {
  id              Int     @id @default(autoincrement())
  img             String? @db.Text
  nome            String? @db.VarChar(255)
  cientifico      String? @db.VarChar(255)
  classificacao   String? @db.VarChar(255)
  caracteristicas String? @db.Text
  habitat         String? @db.VarChar(255)
  populacao       String? @db.VarChar(255)
  curiosidades    String? @db.Text
}

model users {
  id       Int    @id @default(autoincrement())
  name     String @db.VarChar(255)
  email    String @unique(map: "email") @db.VarChar(255)
  password String @db.VarChar(255)
}
