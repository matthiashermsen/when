import type { H3Event } from "h3";

export default async function handleOAuthSuccess(
	event: H3Event<globalThis.EventHandlerRequest>,
	account: AccountWrite,
) {
	try {
		await upsertAccount(account);

		await setUserSession(event, {
			user: {
				provider: account.provider,
				providerAccountID: account.providerAccountID,
			},
		});

		const redirect = getCookie(event, "auth_redirect");

		deleteCookie(event, "auth_redirect");

		if (redirect && redirect.startsWith("/") && !redirect.startsWith("//")) {
			return sendRedirect(event, redirect);
		}

		return sendRedirect(event, "/"); // TODO with locale
	} catch (error) {
		console.error("OAuth error:", error);

		deleteCookie(event, "auth_redirect");

		return sendRedirect(event, "/sign-in"); // TODO with locale
	}
}
