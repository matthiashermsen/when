<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { t } = useI18n({
	useScope: "local",
});
const localePath = useLocalePath();
const route = useRoute();

const navigationItems = computed((): NavigationMenuItem[] => [
	{
		label: t("termsOfService"),
		to: localePath("/terms-of-service"),
		active: route.path === localePath("/terms-of-service"),
	},
	{
		label: t("privacyPolicy"),
		to: localePath("/privacy-policy"),
		active: route.path === localePath("/privacy-policy"),
	},
	{
		label: t("imprint"),
		to: localePath("/imprint"),
		active: route.path === localePath("/imprint"),
	},
]);
</script>

<template>
  <USeparator class="h-px" />
  <UFooter>
    <template #left>
      <LocaleSelect />
      <UColorModeButton />
    </template>
    <UNavigationMenu :items="navigationItems" />
    <template #right>
      <UButton href="https://github.com/matthiashermsen/when" icon="i-lucide-github" color="neutral" variant="ghost" target="_blank">Repository</UButton>
    </template>
  </UFooter>  
</template>

<i18n lang="json">
{
  "en": {
    "termsOfService": "Terms of Service",
    "privacyPolicy": "Privacy Policy",
    "imprint": "Imprint"
  },
  "de": {
    "termsOfService": "Nutzungsbedingungen",
    "privacyPolicy": "Datenschutzerklärung",
    "imprint": "Impressum"
  },
  "tr": {
    "termsOfService": "Hizmet Şartları",
    "privacyPolicy": "Gizlilik Politikası",
    "imprint": "Künye"
  }
}
</i18n>