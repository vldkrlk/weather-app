<script lang="ts" setup>
import WeatherMap from "./WeatherMap.vue";
import HighlightUVIndex from "./highlights/HighlightUVIndex.vue";
import HighlightWindStatus from "./highlights/HighlightWindStatus.vue";
import HighlightSun from "./highlights/HighlightSun.vue";
import HighlightHumidity from "./highlights/HighlightHumidity.vue";
import HighlightVisibility from "./highlights/HighlightVisibility.vue";
import HighlightTemp from "./highlights/HighlightTemp.vue";
import Cords from "../types/Cords";
import { defineProps } from "vue";

interface Props {
  cords: Cords;
  uvindex: number;
  windSpeed: number;
  windDeg: number;
  sunrise: number;
  sunset: number;
  humidity: number;
  visibility: number;
  maxTemp: number;
  minTemp: number;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="content-highlights">
    <h2>Todays highlights</h2>
    <div class="todays-highlights">
      <HighlightUVIndex :uvindex="props.uvindex"></HighlightUVIndex>

      <HighlightWindStatus
        :wind-speed="props.windSpeed"
        :wind-deg="props.windDeg"
      ></HighlightWindStatus>

      <HighlightSun
        :sunrise="props.sunrise"
        :sunset="props.sunset"
      ></HighlightSun>

      <HighlightHumidity :humidity="props.humidity"></HighlightHumidity>

      <HighlightVisibility :visibility="props.visibility"></HighlightVisibility>

      <HighlightTemp
        :max-temp="props.maxTemp"
        :min-temp="props.minTemp"
      ></HighlightTemp>

      <div class="todays-highlights__item_map">
        <WeatherMap :cords="props.cords"></WeatherMap>
      </div>
    </div>
  </div>
</template>
