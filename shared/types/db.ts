import type { accounts, schedules, scheduleVotes } from "@nuxthub/db/schema";

export type AccountRead = typeof accounts.$inferSelect;
export type AccountWrite = typeof accounts.$inferInsert;

export type ScheduleRead = typeof schedules.$inferSelect;
export type ScheduleWrite = typeof schedules.$inferInsert;

export type ScheduleVoteRead = typeof scheduleVotes.$inferSelect;
export type ScheduleVoteWrite = typeof scheduleVotes.$inferInsert;
