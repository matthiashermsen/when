<script setup lang="ts">
definePageMeta({
	middleware: ["require-auth"],
});

const { t } = useI18n({
	useScope: "local",
});
const localePath = useLocalePath();

const { data, pending, error } = await useFetch(() => "/api/schedules");

const searchTerm = ref("");

const filteredSchedules = computed(() => {
	if (!data.value) {
		return [];
	}

	const s = searchTerm.value.toLowerCase();

	return data.value.filter(
		(schedule) =>
			schedule.id.toLowerCase().includes(s) ||
			schedule.title.toLowerCase().includes(s),
	);
});
</script>

<template>
    <UPage>
      <AuthState v-slot="{ loggedIn }">
        <UPageSection
          :title="t('title')"
          :description="t('description')"
          icon="i-lucide-vote"
        >
          <SessionNotFoundBox v-if="!loggedIn" />
          <template v-else>
            <UProgress v-if="pending" />
            <UAlert
              v-else-if="error"
              color="error"
              variant="soft"
              :title="t('error.title')"
              :description="t('error.description')"
              icon="i-lucide-bug"
            />
            <template v-else>
              <UEmpty
                v-if="data?.length === 0"
                icon="i-lucide-circle-question-mark"
                :title="t('noData.title')"
                :description="t('noData.description')"
                variant="naked"
              />
              <template v-else>
                <UInput v-model="searchTerm" icon="i-lucide-search" :placeholder="t('search')" class="w-full" size="xl" />
                <UEmpty
                  v-if="filteredSchedules.length === 0"
                  icon="i-lucide-circle-question-mark"
                  :title="t('emptySearchResult.title')"
                  :description="t('emptySearchResult.description')"
                  variant="naked"
                />
                <UPageList v-else divide>
                  <UPageCard
                    v-for="schedule in filteredSchedules"
                    :key="schedule.id"
                    variant="ghost"
                    :to="localePath(`/schedules/${schedule.id}`)"
                    :title="schedule.title"
                    :description="schedule.id"
                  />
                </UPageList>
              </template>
            </template>
          </template>
        </UPageSection>
      </AuthState>
    </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Your Votes",
    "description": "All schedules you've participated in at a glance.",
    "error": {
      "title": "Something went wrong",
      "description": "We couldn't load your schedules. Please try again."
    },
    "noData": {
      "title": "No votes yet",
      "description": "You haven’t participated in any schedules yet."
    },
    "search": "Search schedules...",
    "emptySearchResult": {
      "title": "No results found",
      "description": "Try a different search term."
    }
  },
  "de": {
    "title": "Deine Abstimmungen",
    "description": "Hier siehst du alle Terminabstimmungen, an denen du teilgenommen hast.",
    "error": {
      "title": "Etwas ist schiefgelaufen",
      "description": "Deine Abstimmungen konnten nicht geladen werden. Bitte versuch es erneut."
    },
    "noData": {
      "title": "Noch keine Abstimmungen",
      "description": "Du hast bisher an keiner Terminabstimmung teilgenommen."
    },
    "search": "Abstimmungen durchsuchen…",
    "emptySearchResult": {
      "title": "Keine Treffer gefunden",
      "description": "Probier einen anderen Suchbegriff."
    }
  },
  "tr": {
    "title": "Oylamaların",
    "description": "Katıldığın tüm takvim oylamalarını burada görebilirsin.",
    "error": {
      "title": "Bir hata oluştu",
      "description": "Oylamalar yüklenemedi. Lütfen tekrar dene."
    },
    "noData": {
      "title": "Henüz oylama yok",
      "description": "Şu ana kadar hiçbir takvim oylamasına katılmadın."
    },
    "search": "Oylamalarda ara…",
    "emptySearchResult": {
      "title": "Sonuç bulunamadı",
      "description": "Farklı bir arama terimi deneyebilirsin."
    }
  }
}
</i18n>