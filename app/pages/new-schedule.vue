<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

const { t } = useI18n({
	useScope: "local",
});
const localePath = useLocalePath();
const toast = useToast();

const formState = reactive<NewSchedule>({
	title: "",
});

async function handleFormSubmit(event: FormSubmitEvent<NewSchedule>) {
	try {
		const schedule = await $fetch("/api/schedules", {
			method: "POST",
			body: event.data,
		});

		await navigateTo(localePath(`/schedules/${schedule.id}`));
	} catch {
		toast.add({
			title: t("form.failure.title"),
			description: t("form.failure.description"),
			icon: "i-lucide-alert-circle",
			color: "error",
		});
	}
}
</script>

<template>
    <UPage>
      <UPageSection
        :title="t('title')"
        :description="t('description')"
        icon="i-lucide-calendar-plus"
      >
        <UForm :schema="newScheduleSchema" :state="formState" class="space-y-4 w-full max-w-md mx-auto" @submit="handleFormSubmit">
          <UFormField :label="t('form.fields.title.label')" name="title" required>
            <UInput v-model="formState.title" required :placeholder="t('form.fields.title.placeholder')" class="w-full" type="text" name="title" inputmode="text" aria-required="true" :aria-label="t('form.fields.title.label')" />
          </UFormField>

          <UButton type="submit" :label="t('form.submit')" trailing-icon="i-lucide-arrow-right" block loading-auto />
        </UForm>
      </UPageSection>
    </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Create a new schedule",
    "description": "Set up a schedule and invite others to vote on available dates.",
    "form": {
      "fields": {
        "title": {
          "label": "Title",
          "placeholder": "e.g. Game night"
        }
      },
      "submit": "Create schedule",
      "failure": {
        "title": "Creation failed",
        "description": "We couldn’t create the schedule. Please try again."
      }
    }
  },
  "de": {
    "title": "Neue Terminabstimmung erstellen",
    "description": "Erstelle eine Terminabstimmung und lade andere ein, verfügbare Termine auszuwählen.",
    "form": {
      "fields": {
        "title": {
          "label": "Titel",
          "placeholder": "z. B. Spieleabend"
        }
      },
      "submit": "Terminabstimmung erstellen",
      "failure": {
        "title": "Erstellen fehlgeschlagen",
        "description": "Die Terminabstimmung konnte nicht erstellt werden. Bitte versuch es erneut."
      }
    }
  },
  "tr": {
    "title": "Yeni takvim oylaması oluştur",
    "description": "Bir takvim oluştur ve diğerlerini uygun oldukları tarihleri seçmeye davet et.",
    "form": {
      "fields": {
        "title": {
          "label": "Başlık",
          "placeholder": "örn. Oyun gecesi"
        }
      },
      "submit": "Takvim oluştur",
      "failure": {
        "title": "Oluşturma başarısız",
        "description": "Takvim oluşturulamadı. Lütfen tekrar dene."
      }
    }
  }
}
</i18n>