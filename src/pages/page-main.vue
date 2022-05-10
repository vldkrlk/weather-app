<script lang="ts" setup>
import WeatherApi from "../api/weather";
import TodayPlate from "../components/TheTodayPlate.vue";
import AppHeader from "../components/TheHeader.vue";
import WeekForecast from "../components/TheWeekForecast.vue";
import AppHighlights from "../components/WeatherHighlights.vue";
import HourlyForecast from "@/components/TheHourlyForecast.vue";
import Forecast from "../types/Forecast";
import { ref, markRaw } from "vue";
import useLocation from "../composables/useLocation";
import { useRouter } from "vue-router";

const router = useRouter();
const weatherApi = new WeatherApi();
const response = await useLocation();

if (response == null) {
  router.push({ name: "Location" });
}

const forecast = ref<Forecast>();

const tab = ref(null);

function changeTab(compName) {
  const lookup = {
    WeekForecast,
    HourlyForecast,
  };
  tab.value = markRaw(lookup[compName]);
}
changeTab("WeekForecast");

forecast.value = await weatherApi.getDailyForecast();
forecast.value.daily.splice(0, 1); // remove today
</script>

<template>
  <div>
    <div class="wrap" v-if="forecast && response">
      <div class="side-bar">
        <TodayPlate
          :city="response.locality.value.name"
          :country="response.locality.value.country"
          :temperature="forecast.current.temp"
          :ico="forecast.current.weather[0].icon"
          :coords="{
            lon: response.location.value.coords.longitude,
            lat: response.location.value.coords.latitude,
          }"
        ></TodayPlate>
      </div>
      <div class="content">
        <div class="content-main">
          <AppHeader @toggle="changeTab"></AppHeader>
          <Transition name="forecast" mode="out-in">
            <component
              :is="tab"
              :days="forecast.daily"
              :hourly="forecast.hourly"
            ></component>
          </Transition>
        </div>
      </div>
      <div class="highlights">
        <AppHighlights
          :coords="{
            lon: response.location.value.coords.longitude,
            lat: response.location.value.coords.latitude,
          }"
          :uvindex="forecast.current.uvi"
          :wind-speed="forecast.current.wind_speed"
          :wind-deg="forecast.current.wind_deg"
          :sunrise="forecast.current.sunrise"
          :sunset="forecast.current.sunset"
          :humidity="forecast.current.humidity"
          :visibility="forecast.current.visibility"
          :max-temp="forecast.daily[0].temp.max"
          :min-temp="forecast.daily[0].temp.min"
        ></AppHighlights>
      </div>
    </div>
  </div>
</template>
