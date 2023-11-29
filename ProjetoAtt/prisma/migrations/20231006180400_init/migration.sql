-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Grupo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "estandeId" INTEGER NOT NULL,
    "nomeGrupo" TEXT NOT NULL,
    "nomeProjeto" TEXT NOT NULL,
    "diaApresentacao" DATETIME NOT NULL,
    "alunoId" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Grupo_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_estandeId_fkey" FOREIGN KEY ("estandeId") REFERENCES "Estande" ("numero") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Grupo" ("alunoId", "diaApresentacao", "estandeId", "id", "nomeGrupo", "nomeProjeto") SELECT "alunoId", "diaApresentacao", "estandeId", "id", "nomeGrupo", "nomeProjeto" FROM "Grupo";
DROP TABLE "Grupo";
ALTER TABLE "new_Grupo" RENAME TO "Grupo";
CREATE UNIQUE INDEX "Grupo_estandeId_key" ON "Grupo"("estandeId");
CREATE UNIQUE INDEX "Grupo_nomeGrupo_key" ON "Grupo"("nomeGrupo");
CREATE UNIQUE INDEX "Grupo_nomeProjeto_key" ON "Grupo"("nomeProjeto");
CREATE UNIQUE INDEX "Grupo_alunoId_key" ON "Grupo"("alunoId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
