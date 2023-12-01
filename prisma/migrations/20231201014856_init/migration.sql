/*
  Warnings:

  - The primary key for the `Avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "idGrupo" TEXT NOT NULL,
    "nota1" REAL NOT NULL,
    "nota2" REAL NOT NULL,
    "notaFinal" REAL NOT NULL,
    CONSTRAINT "Avaliacao_idGrupo_fkey" FOREIGN KEY ("idGrupo") REFERENCES "Grupo" ("nomeGrupo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("idGrupo", "nota1", "nota2", "notaFinal") SELECT "idGrupo", "nota1", "nota2", "notaFinal" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE UNIQUE INDEX "Avaliacao_idGrupo_key" ON "Avaliacao"("idGrupo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
