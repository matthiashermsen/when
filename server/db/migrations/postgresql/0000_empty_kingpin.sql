CREATE TABLE "accounts" (
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"name" text,
	"avatar_url" text,
	CONSTRAINT "accounts_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id")
);
--> statement-breakpoint
CREATE TABLE "schedule_votes" (
	"schedule_id" uuid NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"available_date" date NOT NULL,
	CONSTRAINT "schedule_votes_schedule_id_provider_provider_account_id_available_date_pk" PRIMARY KEY("schedule_id","provider","provider_account_id","available_date")
);
--> statement-breakpoint
CREATE TABLE "schedules" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "schedule_votes" ADD CONSTRAINT "schedule_votes_schedule_id_schedules_id_fk" FOREIGN KEY ("schedule_id") REFERENCES "public"."schedules"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule_votes" ADD CONSTRAINT "schedule_votes_provider_provider_account_id_accounts_provider_provider_account_id_fk" FOREIGN KEY ("provider","provider_account_id") REFERENCES "public"."accounts"("provider","provider_account_id") ON DELETE cascade ON UPDATE no action;