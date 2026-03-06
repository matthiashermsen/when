import z from "zod";

export default defineEventHandler(async (event) => {
	const session = await requireUserSession(event);

	const params = await getValidatedRouterParams(event, (data) =>
		z
			.object({
				scheduleID: z.uuid(),
				day: z.iso.date().refine(
					(value) => {
						const today = new Date();
						const todayISO = today.toISOString().split("T")[0]!;

						return value >= todayISO;
					},
					{
						message: "day cannot be in the past",
					},
				),
			})
			.parse(data),
	);

	try {
		await addScheduleDayVote(session.user, params.scheduleID, params.day);
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}
});
