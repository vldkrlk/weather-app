<script lang="ts" setup>
import WeatherApi from "../api/weather";
import LocationApi from "../api/location";
import TodayPlate from "../components/TodayPlate.vue";
import AppHeader from "../components/AppHeader.vue";
import AppWeek from "../components/AppWeek.vue";
import AppHighlights from "../components/AppHighlights.vue";
import GeoPosition from "../types/GeoPosition";
import { ref, Ref } from "vue";

const api = new WeatherApi();
const locationApi = new LocationApi();

//FIX ME
//eslint-disable-next-line
const data: Ref<any> = ref({});
const location: Ref<GeoPosition | undefined> = ref();

await api.init();
await locationApi.init();
data.value = await api.getDailyForecast();
console.log(data.value);
location.value = await locationApi.getCountryAndCityNames();
data.value.daily.splice(0, 1);
</script>

<template>
  <div class="wrap">
    <div class="side-bar">
      <TodayPlate
        v-if="location"
        :city="location.name"
        :country="location.country"
        :temperature="data.current.temp"
        :ico="data.current.weather[0].icon"
      ></TodayPlate>
    </div>
    <div class="content">
      <div class="content-main">
        <AppHeader></AppHeader>
        <AppWeek :days="data.daily"></AppWeek>
      </div>
      <AppHighlights></AppHighlights>
    </div>
  </div>
</template>
