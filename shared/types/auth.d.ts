declare module "#auth-utils" {
	interface User {
		provider: string;
		providerAccountID: string;
	}
}

export {};
