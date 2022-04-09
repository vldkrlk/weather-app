<script lang="ts" setup>
import { defineProps, computed } from "vue";
import WeatherIco from "./WeatherIco.vue";

interface Props {
  country: string;
  temperature: number;
  city: string;
  ico: string;
}

const props = defineProps<Props>();
const roundedTemperature = computed(() => {
  return Math.round(props.temperature);
});
</script>

<template>
  <section class="section today-section">
    <div>
      <button class="search-btn">
        <div>
          <img src="../assets/svg/search.svg" />
        </div>
        <div>
          <span>Search for places...</span>
        </div>
      </button>
    </div>
    <div class="today-section__ico-block">
      <WeatherIco :ico="props.ico" :size="188"></WeatherIco>
    </div>
    <div class="today-info">
      <div class="today-info__main">
        <div class="today-info__degrees">
          <span class="today-info__degrees-text">
            <span class="today-info__degree">{{ roundedTemperature }}</span>
            <span class="today-info__degree-unit">°C</span>
          </span>
        </div>
        <div class="today-info__text">
          <div class="today-info__city">
            <span>{{ props.city }}, {{ props.country }}</span>
          </div>
          <div class="today-info__date">
            <div>
              <span class="today-info__date-day">Monday,</span>
              <span class="today-info__date-time">14:21</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
