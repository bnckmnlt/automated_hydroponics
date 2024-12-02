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

CREATE OR REPLACE FUNCTION notify_trigger()
RETURNS TRIGGER AS $$
BEGIN
-- Convert the NEW row to JSON and send it as a notification
PERFORM pg_notify('new_event', row_to_json(NEW)::text);
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Create a trigger on the table 'your_table_name'
CREATE TRIGGER new_event_trigger
AFTER INSERT OR UPDATE OR DELETE ON event
FOR EACH ROW
EXECUTE FUNCTION notify_trigger();
