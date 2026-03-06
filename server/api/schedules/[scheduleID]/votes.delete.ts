import z from "zod";

export default defineEventHandler(async (event) => {
	const session = await requireUserSession(event);

	const params = await getValidatedRouterParams(event, (data) =>
		z
			.object({
				scheduleID: z.uuid(),
			})
			.parse(data),
	);

	try {
		await deleteUserScheduleVotes(session.user, params.scheduleID);
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}
});
