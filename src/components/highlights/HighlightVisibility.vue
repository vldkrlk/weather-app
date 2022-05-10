<script lang="ts" setup>
import WeatherHighlight from "../WeatherHighlight.vue";
import { defineProps, computed, ComputedRef } from "vue";

interface Props {
  visibility: number;
}

const props = defineProps<Props>();
const visibilityInKilometers: ComputedRef<number> = computed(() => {
  return Math.round(props.visibility / 1000);
});
</script>

<template>
  <WeatherHighlight>
    <template #title> Visibility </template>
    <template #body>
      <div class="highlight-text-block">
        <span class="highlight-text-block__value">{{
          visibilityInKilometers
        }}</span>
        <span> km</span>
      </div>
    </template>
  </WeatherHighlight>
</template>
