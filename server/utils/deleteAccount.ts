import { db, schema } from "@nuxthub/db";
import { and, eq } from "drizzle-orm";
import type { User } from "#auth-utils";

export default async function deleteAccount(user: User) {
	await db
		.delete(schema.accounts)
		.where(
			and(
				eq(schema.accounts.provider, user.provider),
				eq(schema.accounts.providerAccountID, user.providerAccountID),
			),
		);
}
