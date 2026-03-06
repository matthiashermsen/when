<script setup lang="ts">
const { t } = useI18n({
	useScope: "local",
});
const localePath = useLocalePath();
const route = useRoute();
</script>

<template>
    <UEmpty 
      :title="t('title')" 
      :description="t('description')" 
      icon="i-lucide-user-lock"
      variant="naked"
      :actions="[
        {
            icon: 'i-lucide-log-in',
            label: t('actions.signIn'),
            color: 'neutral',
            variant: 'subtle',
            to: localePath(`/sign-in?redirect=${route.fullPath}`)
        }
      ]" 
    />
</template>

<i18n lang="json">
{
  "en": {
    "title": "You’re not signed in",
    "description": "Please sign in to access this content.",
    "actions": {
      "signIn": "Sign in"
    }
  },
  "de": {
    "title": "Du bist nicht angemeldet",
    "description": "Bitte melde dich an, um auf diesen Inhalt zuzugreifen.",
    "actions": {
      "signIn": "Anmelden"
    }
  },
  "tr": {
    "title": "Giriş yapmadın",
    "description": "Bu içeriğe erişmek için lütfen giriş yap.",
    "actions": {
      "signIn": "Giriş yap"
    }
  }
}
</i18n>