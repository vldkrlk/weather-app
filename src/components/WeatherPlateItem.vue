<script lang="ts" setup>
import moment from "moment";
import { defineProps } from "vue";
import Day from "@/types/Day";
import WeatherIco from "./WeatherIco.vue";

interface Props {
  day: Day;
}

const props = defineProps<Props>();
const date = moment(props.day.dt * 1000);
const dayName = date.format("ddd");
</script>

<template>
  <div class="content-days__item">
    <h3>{{ dayName }}</h3>
    <div>
      <WeatherIco :ico="props.day.weather[0].icon" :size="65"></WeatherIco>
    </div>
    <div class="content-days__item-degree">
      <div class="content-days__item-degree-body">
        <span>°{{ Math.round(props.day.temp.day) }}</span>
        <span class="gray">°{{ Math.round(props.day.temp.night) }}</span>
      </div>
    </div>
  </div>
</template>
