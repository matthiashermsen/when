<script setup lang="ts">
const { scheduleID, isoDate } = defineProps<{
	scheduleID: string;
	isoDate: string;
}>();

const emit = defineEmits<{
	update: [];
}>();

const { t } = useI18n({
	useScope: "local",
});
const { user } = useUserSession();
const toast = useToast();

const {
	data: scheduleDayVotes,
	pending: isFetchingScheduleDayVotes,
	error: fetchScheduleDayVotesError,
	refresh: refreshScheduleDayVotes,
} = await useFetch(() => `/api/schedules/${scheduleID}/votes/${isoDate}`);

const isDateInThePast = computed(() => {
	const today = new Date();
	const todayISO = today.toISOString().split("T")[0]!;

	return isoDate < todayISO;
});

const hasUserAlreadyVoted = computed(() => {
	if (!user.value || !scheduleDayVotes.value) {
		return false;
	}

	return scheduleDayVotes.value.some(
		(account) =>
			account.provider === user.value?.provider &&
			account.providerAccountID === user.value.providerAccountID,
	);
});

const accountsWithoutSessionUser = computed(() => {
	if (!scheduleDayVotes.value) {
		return [];
	}

	if (!user.value) {
		return scheduleDayVotes.value;
	}

	return scheduleDayVotes.value.filter(
		(account) =>
			account.provider !== user.value?.provider ||
			account.providerAccountID !== user.value?.providerAccountID,
	);
});

async function handleUserVote() {
	if (hasUserAlreadyVoted.value) {
		try {
			await $fetch(`/api/schedules/${scheduleID}/votes/${isoDate}`, {
				method: "DELETE",
			});

			toast.add({
				title: t("userVote.removeParticipation.success.title"),
				description: t("userVote.removeParticipation.success.description"),
				icon: "i-lucide-check-circle",
				color: "success",
			});
		} catch {
			toast.add({
				title: t("userVote.removeParticipation.error.title"),
				description: t("userVote.removeParticipation.error.description"),
				icon: "i-lucide-alert-circle",
				color: "error",
			});

			return;
		}
	} else {
		try {
			await $fetch(`/api/schedules/${scheduleID}/votes/${isoDate}`, {
				method: "POST",
			});

			toast.add({
				title: t("userVote.addParticipation.success.title"),
				description: t("userVote.addParticipation.success.description"),
				icon: "i-lucide-check-circle",
				color: "success",
			});
		} catch {
			toast.add({
				title: t("userVote.addParticipation.error.title"),
				description: t("userVote.addParticipation.error.description"),
				icon: "i-lucide-alert-circle",
				color: "error",
			});

			return;
		}
	}

	await refreshScheduleDayVotes();

	emit("update");
}
</script>

<template>
    <UProgress v-if="isFetchingScheduleDayVotes" />
    <UAlert
        v-else-if="fetchScheduleDayVotesError"
        color="error"
        variant="soft"
        :title="t('fetchScheduleDayVotesError.title')"
        :description="t('fetchScheduleDayVotesError.description')"
        icon="i-lucide-bug"
    />
    <AuthState v-else v-slot="{ loggedIn }">
        <UCard>
            <template #header>
                <SessionNotFoundBox v-if="!loggedIn" />
                    <UContainer class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-sm font-medium">
                            {{ hasUserAlreadyVoted 
                                ? t('userVote.hasVoted.title') 
                                : t('userVote.hasNotVoted.title') }}
                            </p>
                        </div>
                        <UButton
                            v-if="!isDateInThePast"
                            :label="hasUserAlreadyVoted 
                            ? t('userVote.hasVoted.button') 
                            : t('userVote.hasNotVoted.button')"
                            :icon="`i-lucide-${hasUserAlreadyVoted ? 'thumbs-down' : 'thumbs-up'}`"
                            :color="hasUserAlreadyVoted ? 'neutral' : 'success'"
                            loading-auto
                            @click="handleUserVote"
                        />
                    </UContainer>
            </template>
            <template #footer>
                <UEmpty
                    v-if="accountsWithoutSessionUser.length === 0"
                    :title="t('otherVoters.empty')"
                    variant="naked"
                    icon="i-lucide-square-dashed"
                />
                <UPageCard v-else :title="t('otherVoters.title')" variant="ghost">
                  <UPageList>
                    <UPageCard
                      v-for="(account) in accountsWithoutSessionUser"
                      :key="`${account.provider}-${account.providerAccountID}`"
                      variant="ghost"
                    >
                      <div class="flex items-center gap-8">
                        <UAvatar :src="account.avatarURL ?? undefined" icon="i-lucide-image" size="3xl" loading="lazy" />
                        <UUser :name="account.name ?? undefined" size="3xl" />
                      </div>
                    </UPageCard>       
                  </UPageList>
                </UPageCard>
            </template>
        </UCard>
    </AuthState>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Availability for this day",
    "description": "See who is participating and manage your own availability.",
    "fetchScheduleDayVotesError": {
      "title": "Could not load participants",
      "description": "We couldn’t retrieve the participants for this day. Please try again."
    },
    "userVote": {
      "hasVoted": {
        "title": "You’re participating on this day",
        "button": "Cancel participation"
      },
      "hasNotVoted": {
        "title": "You’re not participating yet",
        "button": "Participate on this day"
      },
      "addParticipation": {
        "success": {
          "title": "Participation added",
          "description": "You’ve successfully marked yourself as available for this day."
        },
        "error": {
          "title": "Could not add participation",
          "description": "Something went wrong while saving your availability. Please try again."
        }
      },
      "removeParticipation": {
        "success": {
          "title": "Participation removed",
          "description": "You’ve successfully removed your availability for this day."
        },
        "error": {
          "title": "Could not remove participation",
          "description": "Something went wrong while updating your availability. Please try again."
        }
      }
    },
    "otherVoters": {
      "empty": "No other participants yet",
      "title": "Other participants"
    }
  },
  "de": {
    "title": "Verfügbarkeit für diesen Tag",
    "description": "Sieh, wer an diesem Tag teilnehmen kann, und verwalte deine eigene Verfügbarkeit.",
    "fetchScheduleDayVotesError": {
      "title": "Teilnehmende konnten nicht geladen werden",
      "description": "Die Teilnehmenden für diesen Tag konnten nicht abgerufen werden. Bitte versuch es erneut."
    },
    "userVote": {
      "hasVoted": {
        "title": "Du bist an diesem Tag dabei",
        "button": "Teilnahme zurückziehen"
      },
      "hasNotVoted": {
        "title": "Du hast für diesen Tag noch nicht abgestimmt",
        "button": "An diesem Tag teilnehmen"
      },
      "addParticipation": {
        "success": {
          "title": "Teilnahme gespeichert",
          "description": "Du bist für diesen Tag als verfügbar markiert."
        },
        "error": {
          "title": "Teilnahme konnte nicht gespeichert werden",
          "description": "Beim Speichern deiner Verfügbarkeit ist ein Fehler aufgetreten. Bitte versuch es erneut."
        }
      },
      "removeParticipation": {
        "success": {
          "title": "Teilnahme entfernt",
          "description": "Deine Verfügbarkeit für diesen Tag wurde entfernt."
        },
        "error": {
          "title": "Teilnahme konnte nicht entfernt werden",
          "description": "Beim Aktualisieren deiner Verfügbarkeit ist ein Fehler aufgetreten. Bitte versuch es erneut."
        }
      }
    },
    "otherVoters": {
      "empty": "Noch keine weiteren Teilnehmenden",
      "title": "Weitere Teilnehmende"
    }
  },
  "tr": {
    "title": "Bu gün için müsaitlik",
    "description": "Bu gün kimlerin katıldığını gör ve kendi müsaitliğini yönet.",
    "fetchScheduleDayVotesError": {
      "title": "Katılımcılar yüklenemedi",
      "description": "Bu gün için katılımcılar alınamadı. Lütfen tekrar dene."
    },
    "userVote": {
      "hasVoted": {
        "title": "Bu gün için katılıyorsun",
        "button": "Katılımı iptal et"
      },
      "hasNotVoted": {
        "title": "Henüz bu gün için oy vermedin",
        "button": "Bu gün katıl"
      },
      "addParticipation": {
        "success": {
          "title": "Katılım eklendi",
          "description": "Bu gün için müsait olarak işaretlendin."
        },
        "error": {
          "title": "Katılım eklenemedi",
          "description": "Müsaitliğin kaydedilirken bir hata oluştu. Lütfen tekrar dene."
        }
      },
      "removeParticipation": {
        "success": {
          "title": "Katılım kaldırıldı",
          "description": "Bu gün için müsaitliğin kaldırıldı."
        },
        "error": {
          "title": "Katılım kaldırılamadı",
          "description": "Müsaitliğin güncellenirken bir hata oluştu. Lütfen tekrar dene."
        }
      }
    },
    "otherVoters": {
      "empty": "Henüz başka katılımcı yok",
      "title": "Diğer katılımcılar"
    }
  }
}
</i18n>