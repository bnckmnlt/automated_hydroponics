DO $$ BEGIN
 CREATE TYPE "public"."event_severity" AS ENUM('log', 'error', 'warning');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "debug" ADD COLUMN "severity" "event_severity" NOT NULL;--> statement-breakpoint
ALTER TABLE "debug" DROP COLUMN IF EXISTS "event";