<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { t } = useI18n({
	useScope: "local",
});
const { loggedIn, clear } = useUserSession();
const toast = useToast();
const localePath = useLocalePath();
const route = useRoute();

const navigationItems = computed(() => {
	const navigationMenuItems: NavigationMenuItem[] = [];

	navigationMenuItems.push({
		label: t("navigation.newSchedule"),
		to: localePath("/new-schedule"),
		icon: "i-lucide-calendar-plus",
		active: route.path === localePath("/new-schedule"),
	});

	if (loggedIn.value) {
		navigationMenuItems.push({
			label: t("navigation.votes"),
			to: localePath("/votes"),
			icon: "i-lucide-vote",
			active: route.path === localePath("/votes"),
		});

		navigationMenuItems.push({
			label: t("navigation.settings"),
			to: localePath("/settings"),
			icon: "i-lucide-settings",
			active: route.path === localePath("/settings"),
		});
	}

	return navigationMenuItems;
});

async function signOut() {
	try {
		await clear();

		toast.add({
			title: t("signOut.success.title"),
			description: t("signOut.success.description"),
			icon: "i-lucide-check-circle",
			color: "success",
		});

		await navigateTo(localePath("/"));
	} catch {
		toast.add({
			title: t("signOut.error.title"),
			description: t("signOut.error.description"),
			icon: "i-lucide-alert-circle",
			color: "error",
		});
	}
}
</script>

<template>
  <UHeader title="When" :to="localePath('/')" mode="drawer">
    <UNavigationMenu :items="navigationItems" />

    <template #body>
      <UNavigationMenu :items="navigationItems" orientation="vertical" />
    </template>

    <template #right>
      <AuthState v-slot="{ loggedIn }">
        <UButton
          v-if="loggedIn"
          :label="t('signOut.buttonLabel')"  
          icon="i-lucide-log-out"
          color="neutral"
          variant="ghost"
          @click="signOut"
          loading-auto
        />
        <UButton
          v-else
          :label="t('signIn.buttonLabel')"  
          icon="i-lucide-log-in"
          color="neutral"
          variant="ghost"
          :to="localePath(`/sign-in?redirect=${route.fullPath}`)"
        />
      </AuthState>
    </template>
  </UHeader>
</template>

<i18n lang="json">
{
  "en": {
    "navigation": {
      "newSchedule": "New schedule",
      "votes": "My votes",
      "settings": "Settings"
    },
    "signIn": {
      "buttonLabel": "Sign in"
    },
    "signOut": {
      "buttonLabel": "Sign out",
      "success": {
        "title": "Signed out",
        "description": "You’ve been successfully signed out."
      },
      "error": {
        "title": "Sign out failed",
        "description": "Please try again or refresh the page."
      }
    }
  },
  "de": {
    "navigation": {
      "newSchedule": "Neue Abstimmung",
      "votes": "Meine Abstimmungen",
      "settings": "Einstellungen"
    },
    "signIn": {
      "buttonLabel": "Anmelden"
    },
    "signOut": {
      "buttonLabel": "Abmelden",
      "success": {
        "title": "Abgemeldet",
        "description": "Du wurdest erfolgreich abgemeldet."
      },
      "error": {
        "title": "Abmelden fehlgeschlagen",
        "description": "Bitte versuch es erneut oder lade die Seite neu."
      }
    }
  },
  "tr": {
    "navigation": {
      "newSchedule": "Yeni oylama",
      "votes": "Oylarım",
      "settings": "Ayarlar"
    },
    "signIn": {
      "buttonLabel": "Giriş yap"
    },
    "signOut": {
      "buttonLabel": "Çıkış yap",
      "success": {
        "title": "Çıkış yapıldı",
        "description": "Başarıyla çıkış yaptın."
      },
      "error": {
        "title": "Çıkış başarısız",
        "description": "Lütfen tekrar dene veya sayfayı yenile."
      }
    }
  }
}
</i18n>