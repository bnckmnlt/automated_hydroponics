CREATE TABLE IF NOT EXISTS "ultrasonic" (
	"id" serial PRIMARY KEY NOT NULL,
	"highest_distance" integer NOT NULL,
	"lowest_distance" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
