<script lang="ts" setup>
import WeatherHighlight from "../WeatherHighlight.vue";
import { defineProps, computed, ComputedRef } from "vue";

interface Props {
  windSpeed: number;
  windDeg: number;
}

const props = defineProps<Props>();

const roundedWindSpeed: ComputedRef<number> = computed(() => {
  return Math.round(props.windSpeed);
});
</script>

<template>
  <WeatherHighlight>
    <template #title> Wind status </template>
    <template #body>
      <div class="highlight-text-block">
        <span class="highlight-text-block__value">{{ roundedWindSpeed }}</span>
        <span> km/h</span>
      </div>
    </template>
    <template #description> Wind direction: {{ props.windDeg }}° </template>
  </WeatherHighlight>
</template>
