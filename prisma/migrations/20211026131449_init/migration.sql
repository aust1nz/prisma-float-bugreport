-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(255) NOT NULL,
    "salary" DECIMAL(8,2) NOT NULL,
    "fte" DOUBLE PRECISION,
    "fteAlternate" REAL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
