<script setup lang="ts">
import type { DateValue } from "@internationalized/date";

const { day, scheduleVotesPerDayIntensityMap } = defineProps<{
	day: DateValue;
	scheduleVotesPerDayIntensityMap: Record<string, number>;
}>();

const visuals = computed(() => {
	const intensity = scheduleVotesPerDayIntensityMap[day.toString()] ?? 0;

	const intensityColors = [
		"bg-transparent",
		"bg-emerald-900",
		"bg-emerald-700",
		"bg-emerald-500",
		"bg-emerald-300",
		"bg-emerald-100",
	];

	const maxIndex = intensityColors.length - 1;
	const index = Math.round(intensity * maxIndex);

	return {
		isVisible: intensity > 0,
		color: intensityColors[index],
	};
});
</script>

<template>
    <UChip :show="visuals.isVisible" :ui="{ base: visuals.color }">
        {{ day.day }}
    </UChip>
</template>