/*
  Warnings:

  - A unique constraint covering the columns `[nim]` on the table `Mahasiswa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Mahasiswa_nim_key` ON `Mahasiswa`(`nim`);
