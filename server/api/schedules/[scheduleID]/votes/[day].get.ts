import z from "zod";

export default defineEventHandler(async (event) => {
	const params = await getValidatedRouterParams(event, (data) =>
		z
			.object({
				scheduleID: z.uuid(),
				day: z.iso.date(),
			})
			.parse(data),
	);

	try {
		const scheduleDayVotes = await getScheduleDayVotes(
			params.scheduleID,
			params.day,
		);

		return scheduleDayVotes;
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}
});
