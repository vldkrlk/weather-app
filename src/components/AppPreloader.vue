<script setup lang="ts">
import WeatherIco from "./WeatherIco.vue";
</script>

<template>
  <div class="preloader">
    <div class="preloader__ico">
      <WeatherIco ico="01d" :size="70" />
    </div>
  </div>
</template>
