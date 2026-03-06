import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import scheduleMaximumLength from "#shared/utils/scheduleMaximumLength";

export const schedules = pgTable("schedules", {
	id: uuid().defaultRandom().primaryKey(),
	title: varchar({ length: scheduleMaximumLength }).notNull(),
});
