export default defineOAuthGitHubEventHandler({
	config: {},
	async onSuccess(event, { user }) {
		const account: AccountWrite = {
			provider: "github",
			providerAccountID: String(user.id),
			name: user.name || user.login,
			avatarURL: user.avatar_url,
		};

		return handleOAuthSuccess(event, account);
	},
	onError(event, error) {
		return handleOAuthError(event, error);
	},
});
