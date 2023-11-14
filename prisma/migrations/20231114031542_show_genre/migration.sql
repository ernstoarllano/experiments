/*
  Warnings:

  - You are about to drop the column `category` on the `shows` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "shows" DROP COLUMN "category",
ADD COLUMN     "genre" TEXT;
