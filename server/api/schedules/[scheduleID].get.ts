import z from "zod";

export default defineEventHandler(async (event) => {
	const params = await getValidatedRouterParams(event, (data) =>
		z
			.object({
				scheduleID: z.uuid(),
			})
			.parse(data),
	);

	let schedule;

	try {
		schedule = await getScheduleByID(params.scheduleID);
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}

	if (!schedule) {
		throw createError({
			statusCode: 404,
			statusMessage: `Could not find schedule with ID ${params.scheduleID}`,
		});
	}

	return schedule;
});
