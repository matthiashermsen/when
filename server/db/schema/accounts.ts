import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";

export const accounts = pgTable(
	"accounts",
	{
		provider: text().notNull(),
		providerAccountID: text("provider_account_id").notNull(),
		name: text(),
		avatarURL: text("avatar_url"),
	},
	(table) => [
		primaryKey({ columns: [table.provider, table.providerAccountID] }),
	],
);
