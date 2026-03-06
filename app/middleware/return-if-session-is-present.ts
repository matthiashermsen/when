export default defineNuxtRouteMiddleware((to, from) => {
	const { loggedIn } = useUserSession();

	if (!loggedIn.value) {
		return;
	}

	if (!from.name || from.fullPath === to.fullPath) {
		const localePath = useLocalePath();

		return navigateTo({
			path: localePath("/"),
		});
	}

	return navigateTo({
		path: from.fullPath,
	});
});
