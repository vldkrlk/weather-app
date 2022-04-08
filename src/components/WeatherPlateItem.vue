<script lang="ts" setup>
import moment from "moment";
import { defineProps } from "vue";
import Day from "@/types/Day";

interface Props {
  day: Day;
}

const props = defineProps<Props>();
const date = moment(props.day.dt * 1000);
const dayName = date.format("ddd");
</script>

<template>
  <div class="content-days__item">
    <h3>{{ dayName }}</h3>
    <div>
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.4688 10.1562V4.0625H34.5312V10.1562H30.4688ZM41.9129 12.1343L44.9598 6.85696L48.478 8.88821L45.4311 14.1655L41.9129 12.1343ZM32.5 46.7188C40.3528 46.7188 46.7188 40.3528 46.7188 32.5C46.7188 24.6472 40.3528 18.2812 32.5 18.2812C24.6472 18.2812 18.2812 24.6472 18.2812 32.5C18.2812 40.3528 24.6472 46.7188 32.5 46.7188ZM32.5 50.7812C42.5965 50.7812 50.7812 42.5965 50.7812 32.5C50.7812 22.4035 42.5965 14.2188 32.5 14.2188C22.4035 14.2188 14.2188 22.4035 14.2188 32.5C14.2188 42.5965 22.4035 50.7812 32.5 50.7812ZM54.8438 30.4688H60.9375V34.5312H54.8438V30.4688ZM56.1119 16.5221L50.8346 19.569L52.8658 23.0872L58.1432 20.0404L56.1119 16.5221ZM16.5221 8.88821L19.569 14.1655L23.0872 12.1343L20.0404 6.85696L16.5221 8.88821ZM12.1342 23.0872L6.85683 20.0404L8.88808 16.5221L14.1654 19.569L12.1342 23.0872ZM30.4688 54.8438V60.9375H34.5312V54.8438H30.4688ZM10.1562 30.4688H4.0625V34.5312H10.1562V30.4688ZM6.85672 44.9596L12.1341 41.9128L14.1653 45.431L8.88797 48.4779L6.85672 44.9596ZM19.5691 50.8348L16.5223 56.1121L20.0405 58.1434L23.0874 52.8661L19.5691 50.8348ZM44.9596 58.1434L41.9128 52.8661L45.431 50.8348L48.4779 56.1121L44.9596 58.1434ZM50.8347 45.431L56.112 48.4779L58.1433 44.9596L52.8659 41.9128L50.8347 45.431Z"
          fill="url(#paint0_linear_10_1155)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10_1155"
            x1="32.5"
            y1="4.0625"
            x2="32.5"
            y2="60.9375"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EFC977" />
            <stop offset="1" stop-color="#E07256" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="content-days__item-degree">
      <div class="content-days__item-degree-body">
        <span>°{{ Math.round(props.day.temp.day) }}</span>
        <span class="gray">°{{ Math.round(props.day.temp.night) }}</span>
      </div>
    </div>
  </div>
</template>
