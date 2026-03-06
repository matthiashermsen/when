import { db, schema } from "@nuxthub/db";
import { count, eq } from "drizzle-orm";

export default function getScheduleVotesPerDay(scheduleID: string) {
	return db
		.select({
			date: schema.scheduleVotes.availableDate,
			amountOfVotes: count(),
		})
		.from(schema.scheduleVotes)
		.where(eq(schema.scheduleVotes.scheduleID, scheduleID))
		.groupBy(schema.scheduleVotes.availableDate);
}
