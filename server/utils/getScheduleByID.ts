import { db, schema } from "@nuxthub/db";
import { eq } from "drizzle-orm";

export default async function getScheduleByID(scheduleID: string) {
	const rows = await db
		.select()
		.from(schema.schedules)
		.where(eq(schema.schedules.id, scheduleID))
		.limit(1);

	return rows[0];
}
