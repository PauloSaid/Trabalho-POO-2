-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "telefone" INTEGER NOT NULL,
    "grupoId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Aluno_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "estandeId" INTEGER NOT NULL,
    "nomeGrupo" TEXT NOT NULL,
    "nomeProjeto" TEXT NOT NULL,
    "diaApresentacao" DATETIME NOT NULL,
    "alunoId" TEXT NOT NULL,
    CONSTRAINT "Grupo_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_estandeId_fkey" FOREIGN KEY ("estandeId") REFERENCES "Estande" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estande" (
    "numero" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idGrupo" TEXT NOT NULL PRIMARY KEY,
    "nota1" REAL NOT NULL,
    "nota2" REAL NOT NULL,
    "notaFinal" REAL NOT NULL,
    CONSTRAINT "Avaliacao_idGrupo_fkey" FOREIGN KEY ("idGrupo") REFERENCES "Grupo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_telefone_key" ON "Aluno"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_estandeId_key" ON "Grupo"("estandeId");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nomeGrupo_key" ON "Grupo"("nomeGrupo");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nomeProjeto_key" ON "Grupo"("nomeProjeto");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_alunoId_key" ON "Grupo"("alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "Estande_numero_key" ON "Estande"("numero");
