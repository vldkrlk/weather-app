<script lang="ts" setup>
import moment from "moment";
import { defineProps } from "vue";
import Hour from "@/types/Hour";
import WeatherIco from "./ui/WeatherIco.vue";

interface Props {
  hour: Hour;
}

const props = defineProps<Props>();
const time = moment(props.hour.dt * 1000).format("HH:mm");
</script>

<template>
  <div class="content-days__item">
    <h3>{{ time }}</h3>
    <div>
      <WeatherIco :ico="props.hour.weather[0].icon" :size="65"></WeatherIco>
    </div>
    <div class="content-days__item-degree">
      <div class="content-days__item-degree-body">
        <span>°{{ Math.round(props.hour.temp) }}</span>
      </div>
    </div>
  </div>
</template>
