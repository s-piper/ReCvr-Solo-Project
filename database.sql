
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--tabe: prime_app

CREATE TABLE "user" (
	"id" serial NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "items" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"brand" varchar(255) NOT NULL,
	"model" varchar(255) NOT NULL,
	"upload" varchar(255) NOT NULL,
	"user_Id" int NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "room" (
	"id" serial NOT NULL,
	"room Name" varchar(255) NOT NULL,
	"description" varchar(10000) NOT NULL,
	"upload" varchar(255) NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "room_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "insurance" (
	"id" serial NOT NULL,
	"company" varchar(255) NOT NULL,
	"phone" int NOT NULL,
	"policy Number" varchar(255) NOT NULL,
	"value" int NOT NULL,
	"user_id" varchar(255) NOT NULL,
	CONSTRAINT "insurance_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);