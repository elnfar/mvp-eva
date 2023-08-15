-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userCount" INTEGER,
    "userId" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
