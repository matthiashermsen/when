import type { H3Event } from "h3";

export default function handleOAuthError(
	event: H3Event<globalThis.EventHandlerRequest>,
	error: unknown,
) {
	console.error("OAuth error:", error);

	deleteCookie(event, "auth_redirect");

	return sendRedirect(event, "/sign-in"); // TODO with locale
}
