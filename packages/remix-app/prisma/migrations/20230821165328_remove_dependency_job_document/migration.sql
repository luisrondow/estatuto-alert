/*
  Warnings:

  - You are about to drop the column `jobId` on the `Document` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN "lastDocumentBeforeRun" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "externalId" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_Document" ("date", "externalId", "id", "link") SELECT "date", "externalId", "id", "link" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
