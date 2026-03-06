export default defineEventHandler(async (event) => {
	const session = await requireUserSession(event);

	try {
		await deleteUserVotes(session.user);
	} catch (error) {
		console.error(error);

		throw createError({
			statusCode: 500,
			statusMessage:
				"The server encountered an unexpected condition that prevented it from fulfilling the request.",
		});
	}
});
