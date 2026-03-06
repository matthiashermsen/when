import { db, schema } from "@nuxthub/db";

export default async function createSchedule(newSchedule: NewSchedule) {
	const [insertedSchedule] = await db
		.insert(schema.schedules)
		.values(newSchedule)
		.returning();

	return insertedSchedule;
}
