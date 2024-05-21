-- DropIndex
DROP INDEX `Equipments_title_key` ON `equipments`;

-- DropIndex
DROP INDEX `Rooms_title_key` ON `rooms`;

-- AlterTable
ALTER TABLE `rooms` MODIFY `imgUrl` BLOB NULL;

-- CreateTable
CREATE TABLE `book_room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roomId` INTEGER NOT NULL,
    `bookDate` DATE NOT NULL,
    `timeStart` DATETIME(0) NOT NULL,
    `timeEnd` DATETIME(0) NOT NULL,
    `isActive` TINYINT NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RenameIndex
ALTER TABLE `rooms` RENAME INDEX `Rooms_title_idx` TO `rooms_title_idx`;
