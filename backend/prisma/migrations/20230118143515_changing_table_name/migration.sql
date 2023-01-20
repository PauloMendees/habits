/*
  Warnings:

  - You are about to drop the `day_habits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `day_habits` DROP FOREIGN KEY `day_habits_day_id_fkey`;

-- DropForeignKey
ALTER TABLE `day_habits` DROP FOREIGN KEY `day_habits_habit_id_fkey`;

-- DropTable
DROP TABLE `day_habits`;

-- CreateTable
CREATE TABLE `completed_day_habits` (
    `id` VARCHAR(191) NOT NULL,
    `day_id` VARCHAR(191) NOT NULL,
    `habit_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `completed_day_habits_day_id_habit_id_key`(`day_id`, `habit_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `completed_day_habits` ADD CONSTRAINT `completed_day_habits_day_id_fkey` FOREIGN KEY (`day_id`) REFERENCES `days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `completed_day_habits` ADD CONSTRAINT `completed_day_habits_habit_id_fkey` FOREIGN KEY (`habit_id`) REFERENCES `habits`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
