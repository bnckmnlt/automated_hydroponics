CREATE TABLE IF NOT EXISTS "box_dewpoint" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "box_humidity" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "box_pressure" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "box_temperature" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "water_EC" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "water_tds" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "water_temperature" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" numeric NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "water_pH" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
