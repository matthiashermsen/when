import type { z } from "zod";

export type NewSchedule = z.infer<typeof newScheduleSchema>;
