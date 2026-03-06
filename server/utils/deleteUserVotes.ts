import { db, schema } from "@nuxthub/db";
import { and, eq } from "drizzle-orm";
import type { User } from "#auth-utils";

export default async function deleteUserVotes(user: User) {
	await db
		.delete(schema.scheduleVotes)
		.where(
			and(
				eq(schema.scheduleVotes.provider, user.provider),
				eq(schema.scheduleVotes.providerAccountID, user.providerAccountID),
			),
		);
}
