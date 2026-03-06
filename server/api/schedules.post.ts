export default defineEventHandler(async (event) => {
	const bodyResult = await readValidatedBody(event, (body) =>
		newScheduleSchema.safeParse(body),
	);

	if (!bodyResult.success) {
		throw createError({
			statusCode: 400,
			statusMessage: JSON.stringify(bodyResult.error),
		});
	}

	try {
		const schedule = await createSchedule(bodyResult.data);

		if (!schedule) {
			throw new Error("Could not create schedule");
		}

		return schedule;
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}
});
