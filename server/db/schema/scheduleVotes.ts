import {
	date,
	foreignKey,
	pgTable,
	primaryKey,
	text,
	uuid,
} from "drizzle-orm/pg-core";
import { accounts } from "./accounts";
import { schedules } from "./schedules";

export const scheduleVotes = pgTable(
	"schedule_votes",
	{
		scheduleID: uuid("schedule_id")
			.notNull()
			.references(() => schedules.id, { onDelete: "cascade" }),
		provider: text().notNull(),
		providerAccountID: text("provider_account_id").notNull(),
		availableDate: date("available_date").notNull(),
	},
	(table) => [
		primaryKey({
			columns: [
				table.scheduleID,
				table.provider,
				table.providerAccountID,
				table.availableDate,
			],
		}),

		foreignKey({
			columns: [table.provider, table.providerAccountID],
			foreignColumns: [accounts.provider, accounts.providerAccountID],
		}).onDelete("cascade"),
	],
);
