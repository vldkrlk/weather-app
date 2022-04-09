<script lang="ts" setup>
import { defineProps, computed } from "vue";

interface Props {
  ico: string;
  size?: number;
}

const props = defineProps<Props>();

const imageSrc = computed(() => {
  return require(`../assets/svg/${props.ico}.svg`);
});
</script>
<template>
  <div>
    <img :src="imageSrc" :width="size" />
  </div>
</template>
