export default defineEventHandler(async (event) => {
	const session = await requireUserSession(event);

	try {
		const schedules = await getUserSchedules(session.user);

		return schedules;
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}
});
