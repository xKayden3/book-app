-- CreateTable
CREATE TABLE `bookequipments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `equipmentId` INTEGER NOT NULL,
    `edpNumber` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `course` VARCHAR(191) NOT NULL,
    `purpose` VARCHAR(191) NULL,
    `contactNo` VARCHAR(191) NULL,
    `endorsedBy` VARCHAR(191) NULL,
    `bookDateStart` DATE NOT NULL,
    `timeStart` DATETIME(0) NOT NULL,
    `bookDateEnd` DATE NOT NULL,
    `timeEnd` DATETIME(0) NOT NULL,
    `isActive` TINYINT NOT NULL DEFAULT 1,
    `isDone` TINYINT NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
