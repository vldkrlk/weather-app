<script lang="ts" setup>
import WeatherHighlight from "../WeatherHighlight.vue";
import { defineProps } from "vue";
import moment from "moment";

interface Props {
  sunrise: number;
  sunset: number;
}

const props = defineProps<Props>();

function formatTime(unixTime: number): string {
  return moment(unixTime * 1000).format("HH:mm");
}
</script>

<template>
  <WeatherHighlight>
    <template #title> Sunrise&Sunset </template>
    <template #body>
      <div class="sun">
        <div class="sun__wrap">
          <div class="sun__item">
            <div class="sun__ico">
              <svg
                width="23"
                height="27"
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6837 10.4662L16.9889 12.3555C18.4789 13.5767 20.6767 13.3587 21.8979 11.8688C23.119 10.3788 22.9011 8.18099 21.4111 6.95984L13.8835 0.790421C13.143 0.183483 12.2276 -0.0679575 11.3441 0.0155905C10.4607 -0.0679578 9.5453 0.183483 8.80475 0.79042L1.27717 6.95984C-0.212802 8.18099 -0.430729 10.3788 0.790417 11.8688C2.01156 13.3587 4.20936 13.5767 5.69933 12.3555L8.08357 10.4015L8.08357 22.7358C8.08357 24.5584 9.56106 26.0359 11.3836 26.0359C13.2062 26.0359 14.6837 24.5584 14.6837 22.7358L14.6837 10.4662Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="sun__value">
              {{ formatTime(props.sunrise) }}
            </div>
          </div>
          <div class="sun__item">
            <div class="sun__ico">
              <svg
                width="23"
                height="27"
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="transform: rotate(180deg)"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6837 10.4662L16.9889 12.3555C18.4789 13.5767 20.6767 13.3587 21.8979 11.8688C23.119 10.3788 22.9011 8.18099 21.4111 6.95984L13.8835 0.790421C13.143 0.183483 12.2276 -0.0679575 11.3441 0.0155905C10.4607 -0.0679578 9.5453 0.183483 8.80475 0.79042L1.27717 6.95984C-0.212802 8.18099 -0.430729 10.3788 0.790417 11.8688C2.01156 13.3587 4.20936 13.5767 5.69933 12.3555L8.08357 10.4015L8.08357 22.7358C8.08357 24.5584 9.56106 26.0359 11.3836 26.0359C13.2062 26.0359 14.6837 24.5584 14.6837 22.7358L14.6837 10.4662Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="sun__value">{{ formatTime(props.sunset) }}</div>
          </div>
        </div>
      </div>
    </template>
  </WeatherHighlight>
</template>
