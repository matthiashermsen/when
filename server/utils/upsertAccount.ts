import { db, schema } from "@nuxthub/db";

export default async function upsertAccount(account: AccountWrite) {
	const { provider, providerAccountID, ...updateData } = account;

	await db
		.insert(schema.accounts)
		.values(account)
		.onConflictDoUpdate({
			target: [schema.accounts.provider, schema.accounts.providerAccountID],
			set: updateData,
		});
}
