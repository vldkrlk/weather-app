<script lang="ts" setup>
import { defineProps, computed } from "vue";

interface Props {
  ico: string;
  size?: number;
}

const props = defineProps<Props>();

const image = computed(() => {
  return require(`@/assets/svg/${props.ico}.svg`);
});
</script>
<template>
  <div class="weather-ico">
    <img :src="image" :width="size" />
  </div>
</template>
