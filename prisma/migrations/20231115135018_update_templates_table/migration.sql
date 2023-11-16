/*
  Warnings:

  - Made the column `data` on table `templates` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `templates` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_templates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "type" TEXT NOT NULL,
    "created_at" DATETIME,
    "updated_at" DATETIME
);
INSERT INTO "new_templates" ("created_at", "data", "id", "image", "name", "status", "type", "updated_at") SELECT "created_at", "data", "id", "image", "name", "status", "type", "updated_at" FROM "templates";
DROP TABLE "templates";
ALTER TABLE "new_templates" RENAME TO "templates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
