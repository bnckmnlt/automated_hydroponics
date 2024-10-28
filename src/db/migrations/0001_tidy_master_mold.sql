DO $$ BEGIN
 CREATE TYPE "public"."debug_event" AS ENUM('log', 'error', 'warning');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "debug" (
	"id" serial PRIMARY KEY NOT NULL,
	"event" "debug_event" NOT NULL,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DROP TABLE "ultrasonic";