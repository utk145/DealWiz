/*
  Warnings:

  - You are about to drop the column `imgageUrl` on the `Products` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "imgageUrl",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
