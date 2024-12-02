DO $$ BEGIN
 CREATE TYPE "public"."event_severity" AS ENUM('log', 'error', 'warning');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
