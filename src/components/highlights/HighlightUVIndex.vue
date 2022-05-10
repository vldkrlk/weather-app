<script lang="ts" setup>
import WeatherHighlight from "../WeatherHighlight.vue";
import { defineProps, computed, ComputedRef } from "vue";

interface Props {
  uvindex: number;
}
const props = defineProps<Props>();

const RADIUS = 22;
const MAX_UVINDEX = 12;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // circumference formula

const uvChartValue: ComputedRef<number> = computed(() => {
  // this computed property returns a value which determines the length of chart
  return (props.uvindex * CIRCUMFERENCE) / MAX_UVINDEX / 2; // divide by two because we use half the circle
});
</script>

<template>
  <WeatherHighlight>
    <template #title> UV Index </template>
    <template #body>
      <div class="uv-chart">
        <div class="uv-chart__value">
          {{ props.uvindex }}
        </div>
        <svg
          class="uv-chart__body"
          width="180"
          height="180"
          viewBox="0 0 50 50"
        >
          <circle
            class="uv-chart__gray-line"
            :r="RADIUS"
            cx="50%"
            cy="65%"
          ></circle>
          <circle
            class="uv-chart__main-line"
            :style="{ strokeDasharray: `${uvChartValue} 138.35` }"
            :r="RADIUS"
            cx="50%"
            cy="65%"
          ></circle>
          <text x="14%" y="10" class="uv-chart__label">3</text>
          <text x="49%" y="5" class="uv-chart__label">6</text>
          <text x="84%" y="10" class="uv-chart__label">9</text>
        </svg>
      </div>
    </template>
  </WeatherHighlight>
</template>
