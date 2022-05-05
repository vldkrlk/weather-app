<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  text: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="base-button">
    {{ props.text }}
  </button>
</template>
