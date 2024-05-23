/*
  Warnings:

  - You are about to drop the column `itemCount` on the `equipments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `bookroom` MODIFY `bookDate` DATE NOT NULL;

-- AlterTable
ALTER TABLE `equipments` DROP COLUMN `itemCount`,
    MODIFY `isAvailable` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0);
