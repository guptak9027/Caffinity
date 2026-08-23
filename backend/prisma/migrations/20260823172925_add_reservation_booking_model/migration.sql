/*
  Warnings:

  - You are about to drop the column `bookingDate` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `checkedIn` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `bookingId` on the `CheckIn` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[reservationId,seatId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[reservationId]` on the table `CheckIn` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reservationId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reservationId` to the `CheckIn` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('LOCAL', 'GOOGLE');

-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_bookingId_fkey";

-- DropIndex
DROP INDEX "Booking_bookingDate_idx";

-- DropIndex
DROP INDEX "CheckIn_bookingId_key";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "bookingDate",
DROP COLUMN "checkedIn",
DROP COLUMN "endTime",
DROP COLUMN "startTime",
DROP COLUMN "status",
DROP COLUMN "updatedAt",
ADD COLUMN     "reservationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CheckIn" DROP COLUMN "bookingId",
ADD COLUMN     "reservationId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'RESERVED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Reservation_userId_idx" ON "Reservation"("userId");

-- CreateIndex
CREATE INDEX "Reservation_bookingDate_idx" ON "Reservation"("bookingDate");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_reservationId_seatId_key" ON "Booking"("reservationId", "seatId");

-- CreateIndex
CREATE UNIQUE INDEX "CheckIn_reservationId_key" ON "CheckIn"("reservationId");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
