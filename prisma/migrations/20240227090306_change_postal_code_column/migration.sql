/*
  Warnings:

  - You are about to drop the column `postal_cde` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `postal_code` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addresses` DROP COLUMN `postal_cde`,
    ADD COLUMN `postal_code` VARCHAR(10) NOT NULL;
