<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

definePageMeta({
	middleware: ["require-auth"],
});

const { t } = useI18n({
	useScope: "local",
});
const route = useRoute();
const toast = useToast();

const { data, pending, error } = await useFetch(
	() => `/api/schedules/${route.params.scheduleID}`,
);

const isDeleteScheduleVotesModalOpen = ref(false);

const headerItems = computed(() => {
	const items: ButtonProps[] = [];

	if (import.meta.client) {
		items.push({
			label: t("share.label"),
			icon: "i-lucide-share",
			variant: "subtle",
			color: "neutral",
			onClick: async () => {
				const shareData: ShareData = {
					title: data.value?.title,
					text: data.value?.id,
					url: window.location.href,
				};

				try {
					if (!navigator.canShare(shareData)) {
						return;
					}

					await navigator.share(shareData);
				} catch (error) {
					console.error(error);

					toast.add({
						title: t("share.error.title"),
						description: t("share.error.description"),
						icon: "i-lucide-alert-circle",
						color: "error",
					});
				}
			},
		});
	}

	items.push({
		label: t("deleteScheduleVotes.button"),
		icon: "i-lucide-trash",
		color: "error",
		variant: "subtle",
		onClick: () => {
			isDeleteScheduleVotesModalOpen.value = true;
		},
	});

	return items;
});

async function deleteScheduleVotes() {
	try {
		await $fetch(`/api/schedules/${route.params.scheduleID}/votes`, {
			method: "DELETE",
		});

		isDeleteScheduleVotesModalOpen.value = false;

		toast.add({
			title: t("deleteScheduleVotes.toast.success.title"),
			description: t("deleteScheduleVotes.toast.success.description"),
			icon: "i-lucide-check-circle",
			color: "success",
		});
	} catch {
		toast.add({
			title: t("deleteScheduleVotes.toast.error.title"),
			description: t("deleteScheduleVotes.toast.error.description"),
			icon: "i-lucide-alert-circle",
			color: "error",
		});
	}
}
</script>

<template>
    <UPage>
      <UContainer>
        <UProgress v-if="pending" />
        <UAlert
          v-else-if="error"
          color="error"
          variant="soft"
          :title="t('error.title')"
          :description="t('error.description', { scheduleID: route.params.scheduleID })"
          icon="i-lucide-bug"
        />
        <template v-else>
          <ClientOnly>
            <UPageHeader :title="data?.title" :headline="data?.id" :links="headerItems">
              <UModal
                  v-model:open="isDeleteScheduleVotesModalOpen"
                  :title="t('deleteScheduleVotes.modal.title')"
                  :description="t('deleteScheduleVotes.modal.description')"
                  close-icon="i-lucide-x"
                >
                  <template #body>
                    <UButton :label="t('deleteScheduleVotes.modal.confirm')" color="error" loading-auto block @click="deleteScheduleVotes" />
                  </template>
                </UModal>
            </UPageHeader>

            <template #fallback>
              <UPageHeader :title="data?.title" :headline="data?.id" />
            </template>
          </ClientOnly>
        
          <UPageBody>
            <ScheduleVotingContainer :schedule-i-d="route.params.scheduleID as string ?? ''" />
          </UPageBody>
        </template>
      </UContainer>
    </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "error": {
      "title": "Schedule not found",
      "description": "We couldn’t load the schedule with ID '{scheduleID}'. Please try again."
    },
    "share": {
      "label": "Share",
      "error": {
        "title": "Sharing failed",
        "description": "We couldn’t share this schedule. Please copy the URL manually."
      }
    },
    "deleteScheduleVotes": {
      "button": "Delete my votes",
      "modal": {
        "title": "Delete your votes?",
        "description": "This will remove your votes from this schedule. This action cannot be undone.",
        "confirm": "Yes, delete my votes"
      },
      "toast": {
        "success": {
          "title": "Votes deleted",
          "description": "Your votes have been successfully removed from this schedule."
        },
        "error": {
          "title": "Deletion failed",
          "description": "Something went wrong. Please try again."
        }
      }
    }
  },
  "de": {
    "error": {
      "title": "Terminabstimmung nicht gefunden",
      "description": "Die Terminabstimmung mit der ID „{scheduleID}“ konnte nicht geladen werden. Bitte versuch es erneut."
    },
    "share": {
      "label": "Teilen",
      "error": {
        "title": "Teilen fehlgeschlagen",
        "description": "Die Terminabstimmung konnte nicht geteilt werden. Bitte kopiere den Link manuell."
      }
    },
    "deleteScheduleVotes": {
      "button": "Meine Abstimmungen löschen",
      "modal": {
        "title": "Deine Abstimmungen löschen?",
        "description": "Deine Stimmen in dieser Terminabstimmung werden dauerhaft entfernt. Diese Aktion kann nicht rückgängig gemacht werden.",
        "confirm": "Ja, meine Abstimmungen löschen"
      },
      "toast": {
        "success": {
          "title": "Abstimmungen gelöscht",
          "description": "Deine Abstimmungen wurden erfolgreich entfernt."
        },
        "error": {
          "title": "Löschen fehlgeschlagen",
          "description": "Etwas ist schiefgelaufen. Bitte versuch es erneut."
        }
      }
    }
  },
  "tr": {
    "error": {
      "title": "Takvim bulunamadı",
      "description": "ID'si „{scheduleID}“ olan takvim yüklenemedi. Lütfen tekrar dene."
    },
    "share": {
      "label": "Paylaş",
      "error": {
        "title": "Paylaşım başarısız",
        "description": "Takvim paylaşılamadı. Lütfen bağlantıyı manuel olarak kopyala."
      }
    },
    "deleteScheduleVotes": {
      "button": "Oylarımı sil",
      "modal": {
        "title": "Oyların silinsin mi?",
        "description": "Bu takvimdeki oyların kalıcı olarak silinecek. Bu işlem geri alınamaz.",
        "confirm": "Evet, oylarımı sil"
      },
      "toast": {
        "success": {
          "title": "Oylar silindi",
          "description": "Bu takvimdeki oyların başarıyla kaldırıldı."
        },
        "error": {
          "title": "Silme işlemi başarısız",
          "description": "Bir hata oluştu. Lütfen tekrar dene."
        }
      }
    }
  }
}
</i18n>