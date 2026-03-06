<script setup lang="ts">
definePageMeta({
	middleware: ["return-if-session-is-present"],
});

const { t } = useI18n({
	useScope: "local",
});
const localePath = useLocalePath();
const route = useRoute();

const providers = computed(() =>
	[
		{ id: "google", name: "Google", icon: "i-simple-icons-google" },
		{ id: "github", name: "Github", icon: "i-simple-icons-github" },
	].map((provider) => ({
		label: t("providerLabel", { provider: provider.name }),
		icon: provider.icon,
		onClick: async () => {
			let redirect = "/";

			if (
				typeof route.query.redirect === "string" &&
				route.query.redirect.startsWith("/") &&
				!route.query.redirect.startsWith("//")
			) {
				redirect = route.query.redirect;
			} else if (Array.isArray(route.query.redirect)) {
				const firstRedirectQuery = route.query.redirect[0];

				if (
					firstRedirectQuery?.startsWith("/") &&
					!firstRedirectQuery.startsWith("//")
				) {
					redirect = firstRedirectQuery;
				}
			}

			useCookie("auth_redirect", {
				maxAge: 60 * 5,
			}).value = localePath(redirect);

			await navigateTo(`/auth/${provider.id}`, { external: true });
		},
	})),
);
</script>

<template>
  <UPage>
    <UPageBody class="min-h-screen flex items-center justify-center px-4">
      <UPageCard class="w-full max-w-md">
        <UAuthForm
          :title="t('title')"
          :description="t('description')"
          icon="i-lucide-lock"
          :providers="providers"
        >
          <template #footer>
            <i18n-t keypath="agreementText" tag="span">
              <template v-slot:linkToTermsOfService>
                <ULink :to="localePath('/terms-of-service')" class="text-primary font-medium">{{ t('termsOfService') }}</ULink>
              </template>
              <template v-slot:linkToPrivacyPolicy>
                <ULink :to="localePath('/privacy-policy')" class="text-primary font-medium">{{ t('privacyPolicy') }}</ULink>
              </template>
            </i18n-t>
          </template>
        </UAuthForm>
      </UPageCard>
    </UPageBody>
  </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Welcome back",
    "description": "Choose how you'd like to sign in.",
    "providerLabel": "Continue with {provider}",
    "agreementText": "By signing in, you agree to our {linkToTermsOfService} and {linkToPrivacyPolicy}.",
    "termsOfService": "Terms of Service",
    "privacyPolicy": "Privacy Policy"
  },
  "de": {
    "title": "Willkommen zurück",
    "description": "Wähle, wie du dich anmelden möchtest.",
    "providerLabel": "Mit {provider} fortfahren",
    "agreementText": "Mit deiner Anmeldung akzeptierst du unsere {linkToTermsOfService} und die {linkToPrivacyPolicy}.",
    "termsOfService": "Nutzungsbedingungen",
    "privacyPolicy": "Datenschutzerklärung"
  },
  "tr": {
    "title": "Tekrar hoş geldin",
    "description": "Nasıl giriş yapmak istediğini seç.",
    "providerLabel": "{provider} ile devam et",
    "agreementText": "Giriş yaparak {linkToTermsOfService} ve {linkToPrivacyPolicy} kabul etmiş olursun.",
    "termsOfService": "Kullanım Şartları",
    "privacyPolicy": "Gizlilik Politikası"
  }
}
</i18n>