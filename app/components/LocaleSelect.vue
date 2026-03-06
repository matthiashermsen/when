<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const localeItems = computed(() =>
	locales.value.map((locale) => ({
		label: locale.name ?? locale.code.toUpperCase(),
		value: locale.code,
	})),
);
</script>

<template>
  <USelect :model-value="locale" :items="localeItems" @update:model-value="setLocale" color="neutral" variant="ghost" />
</template>