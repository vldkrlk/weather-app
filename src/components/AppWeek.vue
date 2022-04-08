<script lang="ts" setup>
import WeatherPlateItem from "./WeatherPlateItem.vue";
import Day from "@/types/Day";
import { defineProps } from "vue";

interface Props {
  days: Array<Day>;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="content-days">
    <WeatherPlateItem
      v-for="day in props.days"
      :key="day.dt"
      :day="day"
    ></WeatherPlateItem>
  </div>
</template>
