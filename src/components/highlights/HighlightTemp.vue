<script lang="ts" setup>
import WeatherHighlight from "../WeatherHighlight.vue";
import { defineProps } from "vue";

interface Props {
  maxTemp: number;
  minTemp: number;
}

const props = defineProps<Props>();
</script>

<template>
  <WeatherHighlight>
    <template #title>Min&Max temperature</template>
    <template #body>
      <div class="temperature">
        <div class="temperature__wrap">
          <div class="temperature__item">
            <div class="temperature__ico"></div>
            <div class="temperature__value">{{ props.minTemp }}°</div>
          </div>
          <div class="temperature__item">
            <div class="temperature__ico"></div>
            <div class="temperature__value">{{ props.maxTemp }}°</div>
          </div>
        </div>
      </div>
    </template>
  </WeatherHighlight>
</template>
