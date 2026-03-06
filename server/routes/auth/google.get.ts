export default defineOAuthGoogleEventHandler({
	config: {},
	async onSuccess(event, { user }) {
		const account: AccountWrite = {
			provider: "google",
			providerAccountID: user.sub,
			name: user.name,
			avatarURL: user.picture,
		};

		return handleOAuthSuccess(event, account);
	},
	onError(event, error) {
		return handleOAuthError(event, error);
	},
});
