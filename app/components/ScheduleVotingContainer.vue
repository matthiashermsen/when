<script setup lang="ts">
import { getLocalTimeZone, today } from "@internationalized/date";

const { scheduleID } = defineProps<{
	scheduleID: string;
}>();

const { t } = useI18n({
	useScope: "local",
});

const {
	data: scheduleVotesPerDay,
	pending: isFetchingScheduleVotesPerDay,
	error: fetchScheduleVotesPerDayError,
	refresh: refreshScheduleVotesPerDay,
} = await useFetch(() => `/api/schedules/${scheduleID}/votes`);

const currentSelectedDate = shallowRef(today(getLocalTimeZone()));

const currentSelectedISODate = computed(() => {
	return currentSelectedDate.value.toString();
});

const scheduleVotesPerDayIntensityMap = computed(() => {
	const map: Record<string, number> = {};

	if (!scheduleVotesPerDay.value) {
		return map;
	}

	const maximumAmountOfVotes = Math.max(
		...scheduleVotesPerDay.value.map((item) => item.amountOfVotes),
	);

	if (maximumAmountOfVotes === 0) {
		return map;
	}

	for (const item of scheduleVotesPerDay.value) {
		map[item.date] = item.amountOfVotes / maximumAmountOfVotes;
	}

	return map;
});
</script>

<template>
    <UPageSection :title="t('title')" :description="t('description')">
        <UProgress v-if="isFetchingScheduleVotesPerDay" />
        <UAlert
            v-else-if="fetchScheduleVotesPerDayError"
            color="error"
            variant="soft"
            :title="t('fetchScheduleVotesPerDayError.title')"
            :description="t('fetchScheduleVotesPerDayError.description')"
            icon="i-lucide-bug"
        />
        <template v-else>
            <UCalendar v-model:model-value="currentSelectedDate">
                <template #day="{ day }">
                    <CalendarDayWithHeatmap :day="day" :schedule-votes-per-day-intensity-map="scheduleVotesPerDayIntensityMap" />
                </template>
            </UCalendar>
            <ScheduleDayVotesContainer :schedule-i-d="scheduleID" :iso-date="currentSelectedISODate" @update="refreshScheduleVotesPerDay" />
        </template>
    </UPageSection>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Choose a date",
    "description": "See how many people are available on each day and add your own vote.",
    "fetchScheduleVotesPerDayError": {
      "title": "Could not load availability",
      "description": "We couldn’t retrieve the votes for this schedule. Please try again."
    }
  },
  "de": {
    "title": "Termin auswählen",
    "description": "Sieh auf einen Blick, wie viele Personen an welchem Tag verfügbar sind, und gib deine Stimme ab.",
    "fetchScheduleVotesPerDayError": {
      "title": "Verfügbarkeiten konnten nicht geladen werden",
      "description": "Die Abstimmungen für diese Terminabstimmung konnten nicht geladen werden. Bitte versuch es erneut."
    }
  },
  "tr": {
    "title": "Tarih seç",
    "description": "Hangi gün kaç kişinin müsait olduğunu gör ve kendi oyunu ekle.",
    "fetchScheduleVotesPerDayError": {
      "title": "Müsaitlikler yüklenemedi",
      "description": "Bu takvim için oylar alınamadı. Lütfen tekrar dene."
    }
  }
}
</i18n>