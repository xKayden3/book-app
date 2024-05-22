-- AlterTable
ALTER TABLE `equipments` ALTER COLUMN `createdAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `rooms` MODIFY `createdAt` DATETIME(0) NOT NULL DEFAULT (now());

-- CreateIndex
CREATE INDEX `FK_bookroom_rooms_id` ON `bookroom`(`roomId`);

-- AddForeignKey
ALTER TABLE `bookroom` ADD CONSTRAINT `FK_bookroom_rooms_id` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
