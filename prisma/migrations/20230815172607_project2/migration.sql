-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "projectId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
