<script lang="ts" setup>
import WeatherHourlyPlate from "./WeatherHourlyPlate.vue";
import Hour from "@/types/Hour";
import { defineProps } from "vue";

interface Props {
  hourly: Array<Hour>;
}

const props = defineProps<Props>();
const forecast: Hour[] = [];
const hoursIndexes = [0, 5, 8, 11, 14, 17, 20];
hoursIndexes.forEach((index) => {
  forecast.push(props.hourly[index]);
});
</script>

<template>
  <div class="content-days">
    <WeatherHourlyPlate
      v-for="hour in forecast"
      :key="hour.dt"
      :hour="hour"
    ></WeatherHourlyPlate>
  </div>
</template>
