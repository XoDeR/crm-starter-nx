-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'USER', 'GUEST');

-- CreateEnum
CREATE TYPE "public"."Language" AS ENUM ('EN', 'NL');

-- CreateEnum
CREATE TYPE "public"."ActiveStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING');

-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "username" TEXT,
    "account_name" TEXT,
    "avatar" TEXT,
    "email" TEXT NOT NULL,
    "is_account_admin" BOOLEAN NOT NULL DEFAULT false,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "last_login_at" DATE,
    "user_status" "public"."ActiveStatus" NOT NULL DEFAULT 'PENDING',
    "user_language" "public"."Language" NOT NULL DEFAULT 'EN',
    "role" "public"."Role" NOT NULL DEFAULT 'GUEST',
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");
