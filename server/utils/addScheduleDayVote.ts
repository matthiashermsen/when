import { db, schema } from "@nuxthub/db";
import type { User } from "#auth-utils";

export default async function addScheduleDayVote(
	user: User,
	scheduleID: string,
	date: string,
) {
	await db
		.insert(schema.scheduleVotes)
		.values({
			scheduleID,
			provider: user.provider,
			providerAccountID: user.providerAccountID,
			availableDate: date,
		})
		.onConflictDoNothing();
}
