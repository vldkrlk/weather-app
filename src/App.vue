<script setup lang="ts">
import WeatherApi from "./api/weather";
import TodayPlate from "./components/TodayPlate.vue";
import AppHeader from "./components/AppHeader.vue";
import AppWeek from "./components/AppWeek.vue";
import AppHighlights from "./components/AppHighlights.vue";

const api = new WeatherApi();
api.getCurrentWeather().then((data) => {
  console.log(data);
});
</script>
<template>
  <div class="wrap">
    <div class="side-bar">
      <TodayPlate></TodayPlate>
    </div>
    <div class="content">
      <div class="content-main">
        <AppHeader></AppHeader>
        <AppWeek></AppWeek>
      </div>
      <AppHighlights></AppHighlights>
    </div>
  </div>
</template>
