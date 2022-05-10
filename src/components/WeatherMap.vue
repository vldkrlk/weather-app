<script lang="ts" setup>
import { defineProps } from "vue";
import Coords from "../types/Coords";

interface Props {
  coords: Coords;
}

const props = defineProps<Props>();
const API_KEY = process.env.VUE_APP_MAPBOX_API_KEY;
const DEFAULT_ZOOM = 8;
</script>
<template>
  <mapbox-map
    @loaded="(event) => event.resize()"
    :accessToken="API_KEY"
    :center="[props.coords.lon, props.coords.lat]"
    :zoom="DEFAULT_ZOOM"
  ></mapbox-map>
</template>
