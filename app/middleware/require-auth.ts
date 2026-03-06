export default defineNuxtRouteMiddleware((to) => {
	const { loggedIn } = useUserSession();

	if (loggedIn.value) {
		return;
	}

	const localePath = useLocalePath();

	return navigateTo({
		path: localePath("/sign-in"),
		query: { redirect: to.fullPath },
	});
});
