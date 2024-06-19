CREATE TABLE IF NOT EXISTS "TosItems" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"order" integer NOT NULL,
	"subItems" integer[],
	CONSTRAINT "TosItems_order_unique" UNIQUE("order")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "TosSubItems" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Images" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer NOT NULL,
	"image" text NOT NULL
);
