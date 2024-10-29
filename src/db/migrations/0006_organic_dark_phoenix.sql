ALTER TABLE "box_dewpoint" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "box_humidity" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "box_pressure" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "box_temperature" ALTER COLUMN "value" SET DATA TYPE double precision;--> statement-breakpoint
ALTER TABLE "event" ALTER COLUMN "severity" SET DEFAULT 'LOG';