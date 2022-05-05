<script lang="ts" setup>
import { LatLngLiteral } from "leaflet";
import { defineProps } from "vue";

interface Props {
  coords: LatLngLiteral;
}

const { coords = [51.509865, -0.118092] } = defineProps<Props>();
</script>

<template>
  <div></div>
</template>
