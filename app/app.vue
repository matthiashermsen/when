<script setup lang="ts">
import * as locales from "@nuxt/ui/locale";

const { locale } = useI18n();

const currentLocale = computed(() => locales[locale.value]);
</script>

<template>
  <NuxtRouteAnnouncer />
  <UApp :locale="currentLocale">
    <MainHeader />
    <MainContent />
    <MainFooter />
  </UApp>
</template>
