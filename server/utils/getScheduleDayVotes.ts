import { db, schema } from "@nuxthub/db";
import { and, eq } from "drizzle-orm";

export default function getScheduleDayVotes(scheduleID: string, date: string) {
	return db
		.select({
			provider: schema.accounts.provider,
			providerAccountID: schema.accounts.providerAccountID,
			name: schema.accounts.name,
			avatarURL: schema.accounts.avatarURL,
		})
		.from(schema.scheduleVotes)
		.innerJoin(
			schema.accounts,
			and(
				eq(schema.accounts.provider, schema.scheduleVotes.provider),
				eq(
					schema.accounts.providerAccountID,
					schema.scheduleVotes.providerAccountID,
				),
			),
		)
		.where(
			and(
				eq(schema.scheduleVotes.scheduleID, scheduleID),
				eq(schema.scheduleVotes.availableDate, date),
			),
		);
}
