<script lang="ts" setup>
import { defineProps, computed, onMounted, onUnmounted, ref, Ref } from "vue";
import WeatherIco from "./ui/WeatherIco.vue";
import moment from "moment-timezone";
import ts from "@mapbox/timespace";
import { useRouter } from "vue-router";
import Coords from "@/types/Coords";

interface Props {
  country: string;
  temperature: number;
  city: string;
  ico: string;
  coords: Coords;
}
const props = defineProps<Props>();
const router = useRouter();

const day: Partial<Ref<string>> = ref();
const time: Partial<Ref<string>> = ref();

const timestamp = Date.now();

const zoneObject = ts.getFuzzyLocalTimeFromPoint(timestamp, [
  props.coords.lon,
  props.coords.lat,
]);

const roundedTemperature = computed(() => {
  return Math.round(props.temperature);
});

function getTime(format: string): string {
  return moment().tz(zoneObject._z.name).format(format);
}

function updateTime() {
  day.value = getTime("dddd");
  time.value = getTime("HH:mm");
}
updateTime();

let timerId: number;

onMounted(() => {
  timerId = setInterval(() => updateTime, 1000);
});
onUnmounted(() => {
  clearInterval(timerId);
});
</script>

<template>
  <section class="section today-section">
    <div>
      <button
        class="search-btn"
        @click="router.push({ name: 'ChangeLocation' })"
      >
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
              <span class="today-info__date-day">{{ day }}, </span>
              <span class="today-info__date-time">{{ time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
