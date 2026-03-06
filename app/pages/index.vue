<script setup lang="ts">
import type { AccordionItem, ButtonProps } from "@nuxt/ui";

const { t, tm, rt } = useI18n({
	useScope: "local",
});
const localePath = useLocalePath();

const heroLinks = ref<ButtonProps[]>([
	{
		label: t("hero.links.getStarted"),
		to: localePath("/new-schedule"),
		icon: "i-lucide-rocket",
	},
]);

const faqItems = computed<AccordionItem[]>(() => {
	const faqLocaleMessages = tm("faq") as Array<AccordionItem>;

	return faqLocaleMessages.map((faqLocaleMessage) => ({
		label: rt(faqLocaleMessage.label ?? ""),
		content: rt(faqLocaleMessage.content ?? ""),
	}));
});
</script>

<template>
    <UPage>
      <UPageHero
        :title="t('hero.title')"
        :description="t('hero.description')"
        :links="heroLinks"
      />
      <UPageSection>
          <UAccordion :items="faqItems" />      
      </UPageSection>
    </UPage>
</template>

<i18n lang="json">
{
  "en": {
    "hero": {
      "title": "Simple, free & open-source scheduling",
      "description": "Create a schedule, mark the days you’re available, and find the best date for everyone.",
      "links": {
        "getStarted": "Create a schedule"
      }
    },
    "faq": [
      {
        "label": "Is When really free?",
        "content": "Yes. When is completely free and open-source. You can create unlimited schedules and invite as many participants as you like — no hidden costs, no premium tiers."
      },
      {
        "label": "What makes When different?",
        "content": "With When, you simply select the days you’re available. We intentionally skip specific times to keep scheduling fast and frictionless."
      },
      {
        "label": "Why do I need an account?",
        "content": "An account ensures your votes are clearly linked to you. You can update your availability anytime, and no one else can vote on your behalf."
      },
      {
        "label": "Does it work for large groups?",
        "content": "Absolutely. There are no limits on participants or selectable days — whether you're planning with five people or fifty."
      },
      {
        "label": "How can I suggest new features?",
        "content": "Feature ideas are always welcome! Please open an issue on GitHub (https://github.com/matthiashermsen/when). Since When is a hobby project, I can’t promise immediate implementation — but every idea is appreciated."
      },
      {
        "label": "Is the project actively maintained?",
        "content": "When started as a personal project for a private use case. I’m happy if others find it useful too. Please note that long-term support isn’t guaranteed."
      }
    ]
  },
  "de": {
    "hero": {
      "title": "Einfach, kostenlos & Open Source Termine finden",
      "description": "Erstelle eine Terminabstimmung, markiere deine verfügbaren Tage und finde den besten Termin für alle.",
      "links": {
        "getStarted": "Termin erstellen"
      }
    },
    "faq": [
      {
        "label": "Ist When wirklich kostenlos?",
        "content": "Ja. When ist vollständig kostenlos und Open Source. Du kannst unbegrenzt Terminabstimmungen erstellen und beliebig viele Personen einladen – ohne versteckte Kosten oder Premium-Modelle."
      },
      {
        "label": "Was macht When anders?",
        "content": "Bei When wählst du nur die Tage aus, an denen du Zeit hast. Konkrete Uhrzeiten lassen wir bewusst weg – so bleibt die Planung schnell und unkompliziert."
      },
      {
        "label": "Warum brauche ich einen Account?",
        "content": "Ein Account stellt sicher, dass deine Abstimmungen eindeutig dir gehören. Du kannst deine Verfügbarkeit jederzeit anpassen und niemand kann in deinem Namen abstimmen."
      },
      {
        "label": "Funktioniert das auch für große Gruppen?",
        "content": "Ja. Es gibt keine Begrenzung bei Teilnehmenden oder auswählbaren Tagen – egal ob fünf oder fünfzig Personen."
      },
      {
        "label": "Wie kann ich neue Features vorschlagen?",
        "content": "Über neue Ideen freue ich mich sehr! Erstelle dafür einfach ein Issue auf GitHub (https://github.com/matthiashermsen/when). Da When ein Hobbyprojekt ist, kann ich keine sofortige Umsetzung garantieren – aber jede Idee wird gelesen."
      },
      {
        "label": "Wird das Projekt aktiv weiterentwickelt?",
        "content": "When ist als persönliches Projekt entstanden. Ich freue mich, wenn es auch für andere nützlich ist. Bitte beachte jedoch, dass kein langfristiger Support garantiert werden kann."
      }
    ]
  },
  "tr": {
    "hero": {
      "title": "Basit, ücretsiz ve açık kaynaklı takvim planlama",
      "description": "Bir takvim oluştur, müsait olduğun günleri işaretle ve herkes için en uygun tarihi bul.",
      "links": {
        "getStarted": "Takvim oluştur"
      }
    },
    "faq": [
      {
        "label": "When gerçekten ücretsiz mi?",
        "content": "Evet. When tamamen ücretsiz ve açık kaynaklıdır. Sınırsız takvim oluşturabilir ve istediğiniz kadar katılımcı davet edebilirsiniz — gizli ücretler veya premium planlar yoktur."
      },
      {
        "label": "When’i farklı yapan nedir?",
        "content": "When’de yalnızca müsait olduğunuz günleri seçersiniz. Planlamayı hızlı ve sade tutmak için belirli saatler özellikle dahil edilmez."
      },
      {
        "label": "Neden bir hesaba ihtiyacım var?",
        "content": "Hesap, oylarınızın size ait olduğunu garanti eder. Müsaitlik durumunuzu istediğiniz zaman güncelleyebilir ve başkalarının sizin adınıza oy kullanmasını engelleyebilirsiniz."
      },
      {
        "label": "Büyük gruplar için uygun mu?",
        "content": "Evet. Katılımcı sayısı veya seçilebilir günler için bir sınır yoktur — ister küçük ister büyük bir grup olsun."
      },
      {
        "label": "Yeni özellikleri nasıl önerebilirim?",
        "content": "Yeni fikirlerinizi duymaktan memnuniyet duyarım! Lütfen GitHub üzerinden bir issue oluşturun (https://github.com/matthiashermsen/when). When bir hobi projesi olduğu için her fikrin hemen uygulanacağını garanti edemem."
      },
      {
        "label": "Proje aktif olarak geliştiriliyor mu?",
        "content": "When başlangıçta kişisel bir ihtiyaç için oluşturuldu. Başkalarının da faydalanmasından mutluluk duyarım. Ancak uzun vadeli destek garanti edilmez."
      }
    ]
  }
}
</i18n>