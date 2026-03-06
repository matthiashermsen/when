<script setup lang="ts">
definePageMeta({
	middleware: ["require-auth"],
});

const { t } = useI18n({
	useScope: "local",
});
const { clear } = useUserSession();
const localePath = useLocalePath();
const toast = useToast();

const isDeleteScheduleVotesModalOpen = ref(false);

async function deleteScheduleVotes() {
	try {
		await $fetch("/api/votes", {
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

async function deleteAccount() {
	try {
		await $fetch("/api/accounts", {
			method: "DELETE",
		});

		await clear();

		await navigateTo(localePath("/"));
	} catch {
		toast.add({
			title: t("deleteAccount.toast.title"),
			description: t("deleteAccount.toast.description"),
			icon: "i-lucide-alert-circle",
			color: "error",
		});
	}
}
</script>

<template>
    <UPage>
      <AuthState v-slot="{ loggedIn }">
        <UPageSection
          :title="t('title')"
          :description="t('description')"
          icon="i-lucide-settings"
        >
          <SessionNotFoundBox v-if="!loggedIn" />
          <template v-else>
            <UContainer class="flex justify-between items-center">
              <UPageCard
                :title="t('deleteScheduleVotes.title')"
                :description="t('deleteScheduleVotes.description')"
                variant="naked"
              />
              <UModal
                v-model:open="isDeleteScheduleVotesModalOpen"
                :title="t('deleteScheduleVotes.modal.title')"
                :description="t('deleteScheduleVotes.modal.description')"
                close-icon="i-lucide-x"
              >
                <UButton :label="t('deleteScheduleVotes.button')" icon="i-lucide-trash" color="error" />

                <template #body>
                  <UButton :label="t('deleteScheduleVotes.modal.confirm')" color="error" loading-auto block @click="deleteScheduleVotes" />
                </template>
              </UModal>              
            </UContainer>
            <UContainer class="flex justify-between items-center">
              <UPageCard
                :title="t('deleteAccount.title')"
                :description="t('deleteAccount.description')"
                variant="naked"
              />
              <UModal 
                :title="t('deleteAccount.modal.title')"
                :description="t('deleteAccount.modal.description')"
                close-icon="i-lucide-x"
              >
                <UButton :label="t('deleteAccount.button')" icon="i-lucide-trash" color="error" />

                <template #body>
                  <UButton :label="t('deleteAccount.modal.confirm')" color="error" loading-auto block @click="deleteAccount" />
                </template>
              </UModal>              
            </UContainer>
          </template>
        </UPageSection>
      </AuthState>
    </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Settings",
    "description": "Manage your account and data.",
    "deleteScheduleVotes": {
      "title": "Delete all my votes",
      "description": "This will permanently remove all your votes from every schedule.",
      "button": "Delete all votes",
      "modal": {
        "title": "Delete all votes?",
        "description": "This action cannot be undone.",
        "confirm": "Yes, delete all my votes"
      },
      "toast": {
        "success": {
          "title": "Votes deleted",
          "description": "All your votes have been successfully removed."
        },
        "error": {
          "title": "Deletion failed",
          "description": "Something went wrong. Please try again."
        }
      }
    },
    "deleteAccount": {
      "title": "Delete my account",
      "description": "This will permanently delete your account and all associated data.",
      "button": "Delete account",
      "modal": {
        "title": "Delete account?",
        "description": "This action cannot be undone.",
        "confirm": "Yes, delete my account"
      },
      "toast": {
        "title": "Deletion failed",
        "description": "Something went wrong. Please try again."
      }
    }
  },
  "de": {
    "title": "Einstellungen",
    "description": "Verwalte deinen Account und deine Daten.",
    "deleteScheduleVotes": {
      "title": "Alle meine Abstimmungen löschen",
      "description": "Dadurch werden alle deine Stimmen aus sämtlichen Terminabstimmungen dauerhaft entfernt.",
      "button": "Alle Abstimmungen löschen",
      "modal": {
        "title": "Alle Abstimmungen löschen?",
        "description": "Diese Aktion kann nicht rückgängig gemacht werden.",
        "confirm": "Ja, alle meine Abstimmungen löschen"
      },
      "toast": {
        "success": {
          "title": "Abstimmungen gelöscht",
          "description": "Alle deine Abstimmungen wurden erfolgreich entfernt."
        },
        "error": {
          "title": "Löschen fehlgeschlagen",
          "description": "Etwas ist schiefgelaufen. Bitte versuch es erneut."
        }
      }
    },
    "deleteAccount": {
      "title": "Meinen Account löschen",
      "description": "Dein Account und alle dazugehörigen Daten werden dauerhaft gelöscht.",
      "button": "Account löschen",
      "modal": {
        "title": "Account löschen?",
        "description": "Diese Aktion kann nicht rückgängig gemacht werden.",
        "confirm": "Ja, meinen Account löschen"
      },
      "toast": {
        "title": "Löschen fehlgeschlagen",
        "description": "Etwas ist schiefgelaufen. Bitte versuch es erneut."
      }
    }
  },
  "tr": {
    "title": "Ayarlar",
    "description": "Hesabını ve verilerini buradan yönetebilirsin.",
    "deleteScheduleVotes": {
      "title": "Tüm oylarımı sil",
      "description": "Bu işlem, katıldığın tüm takvim oylamalarındaki oylarını kalıcı olarak siler.",
      "button": "Tüm oylarımı sil",
      "modal": {
        "title": "Tüm oylar silinsin mi?",
        "description": "Bu işlem geri alınamaz.",
        "confirm": "Evet, tüm oylarımı sil"
      },
      "toast": {
        "success": {
          "title": "Oylar silindi",
          "description": "Tüm oyların başarıyla kaldırıldı."
        },
        "error": {
          "title": "Silme işlemi başarısız",
          "description": "Bir hata oluştu. Lütfen tekrar dene."
        }
      }
    },
    "deleteAccount": {
      "title": "Hesabımı sil",
      "description": "Hesabın ve ilişkili tüm veriler kalıcı olarak silinir.",
      "button": "Hesabı sil",
      "modal": {
        "title": "Hesap silinsin mi?",
        "description": "Bu işlem geri alınamaz.",
        "confirm": "Evet, hesabımı sil"
      },
      "toast": {
        "title": "Silme işlemi başarısız",
        "description": "Bir hata oluştu. Lütfen tekrar dene."
      }
    }
  }
}
</i18n>