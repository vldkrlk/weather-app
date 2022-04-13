<script lang="ts" setup>
import WeatherApi from "../api/weather";
import LocationApi from "../api/location";
import TodayPlate from "../components/TodayPlate.vue";
import AppHeader from "../components/AppHeader.vue";
import AppWeek from "../components/AppWeek.vue";
import AppHighlights from "../components/AppHighlights.vue";
import GeoPosition from "../types/GeoPosition";
import Forecast from "../types/Forecast";
import { ref } from "vue";

const api = new WeatherApi();
const locationApi = new LocationApi();

const data = ref<Forecast>();
const location = ref<GeoPosition>();

await api.init();
await locationApi.init();

data.value = await api.getDailyForecast();
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
      <AppHighlights
        :cords="{
          lon: location.lon,
          lat: location.lat,
        }"
        :uvindex="data.current.uvi"
        :wind-speed="data.current.wind_speed"
        :wind-deg="data.current.wind_deg"
        :sunrise="data.current.sunrise"
        :sunset="data.current.sunset"
        :humidity="data.current.humidity"
        :visibility="data.current.visibility"
        :max-temp="data.daily[0].temp.max"
        :min-temp="data.daily[0].temp.min"
      ></AppHighlights>
    </div>
  </div>
</template>
