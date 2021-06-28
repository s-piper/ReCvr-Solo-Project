
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

--tabe: prime_app

CREATE TABLE "User" (
	"Id" serial NOT NULL,
	"Username" varchar(255) NOT NULL UNIQUE,
	"Password" varchar(255) NOT NULL,
	"Zipcode" varchar(255) NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Items" (
	"Id" serial NOT NULL,
	"Name" varchar(255) NOT NULL,
	"Brand" varchar(255) NOT NULL,
	"Model" varchar(255) NOT NULL,
	"Upload" varchar(255) NOT NULL,
	"User_Id" int NOT NULL,
	CONSTRAINT "Items_pk" PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Room" (
	"Id" serial NOT NULL,
	"Room Name" varchar(255) NOT NULL,
	"Description" varchar(10000) NOT NULL,
	"Upload" varchar(255) NOT NULL,
	"User_Id" int NOT NULL,
	CONSTRAINT "Room_pk" PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Insurance" (
	"Id" serial NOT NULL,
	"Company" varchar(255) NOT NULL,
	"Phone" int NOT NULL,
	"Policy Number" varchar(255) NOT NULL,
	"Value" int NOT NULL,
	"User_Id" varchar(255) NOT NULL,
	CONSTRAINT "Insurance_pk" PRIMARY KEY ("Id")
) WITH (
  OIDS=FALSE
);
