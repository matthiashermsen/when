import { db, schema } from "@nuxthub/db";
import { and, eq } from "drizzle-orm";
import type { User } from "#auth-utils";

export default function getUserSchedules(user: User) {
	return db
		.selectDistinct({
			id: schema.schedules.id,
			title: schema.schedules.title,
		})
		.from(schema.schedules)
		.innerJoin(
			schema.scheduleVotes,
			eq(schema.schedules.id, schema.scheduleVotes.scheduleID),
		)
		.where(
			and(
				eq(schema.scheduleVotes.provider, user.provider),
				eq(schema.scheduleVotes.providerAccountID, user.providerAccountID),
			),
		);
}
