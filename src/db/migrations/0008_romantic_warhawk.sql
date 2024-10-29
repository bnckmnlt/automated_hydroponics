CREATE TABLE IF NOT EXISTS "water_level" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" double precision NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "water_EC" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "water_tds" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "water_temperature" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "water_pH" ALTER COLUMN "value" SET DATA TYPE double precision;