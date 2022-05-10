<script lang="ts" setup>
import WeatherHighlight from "../WeatherHighlight.vue";
import { defineProps, computed, ComputedRef } from "vue";

interface Props {
  humidity: number;
}

const props = defineProps<Props>();

const columnHeight: ComputedRef<number> = computed(() => {
  return props.humidity * 0.9;
});
</script>

<template>
  <WeatherHighlight>
    <template #title> Humidity </template>
    <template #body>
      <div class="humidity">
        <div class="highlight-text-block">
          <span class="highlight-text-block__value">{{ props.humidity }}</span>
          <span>%</span>
        </div>
        <div>
          <svg width="40" height="100" style="transform: rotate(180deg)">
            <rect
              x="0"
              y="0"
              rx="10"
              width="40"
              height="100"
              fill="transparent"
              stroke="#D0D0D0"
              stroke-width="2%"
            />
            <rect
              x="5"
              y="5"
              rx="10"
              width="30"
              :height="columnHeight"
              fill="#4050D2"
            />
          </svg>
        </div>
      </div>
    </template>
  </WeatherHighlight>
</template>
