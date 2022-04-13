<script lang="ts" setup>
import leaflet, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted, defineProps } from "vue";
import Cords from "../types/Cords";

let map;
const API_KEY = process.env.VUE_APP_MAPBOX_API_KEY;

interface Props {
  cords: Cords;
}

const props = defineProps<Props>();
const cityCords: LatLngTuple = [props.cords.lat, props.cords.lon];

onMounted(() => {
  map = leaflet.map("mapHighlights").setView(cityCords, 13);
  leaflet
    .tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${API_KEY}`,
      {
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: API_KEY,
      }
    )
    .addTo(map);
});
</script>
<template>
  <div id="mapHighlights"></div>
</template>
