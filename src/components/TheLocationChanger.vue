<script lang="ts" setup>
import { ref, Ref } from "vue";
import LocationApi from "@/api/location";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSpiner from "@/components/ui/BaseSpiner.vue";
import { useRouter } from "vue-router";

type CoordsTuple = [number, number] | null;

const router = useRouter();
const locationApi = new LocationApi();
const isShowSpiner: Ref<boolean> = ref(false);
const coords: Ref<CoordsTuple> = ref(null);
const locality = ref();
const API_KEY = process.env.VUE_APP_MAPBOX_API_KEY;

function setLocation() {
  if (!coords.value) {
    return;
  }
  locationApi.setLocation(coords.value[1], coords.value[0]);
  router.push({ path: "/" });
}

async function setLocality(coords: CoordsTuple) {
  if (!coords) return;
  isShowSpiner.value = true;
  const response = await locationApi.getLocality(coords[1], coords[0]);
  if (!response) {
    isShowSpiner.value = false;
    throw new Error("Invalid locality. Try again");
  }
  locality.value = response;
  isShowSpiner.value = false;
}

async function setMarker({ lngLat }) {
  try {
    const coordTuple: CoordsTuple = [lngLat.lng, lngLat.lat];
    await setLocality(coordTuple);
    coords.value = coordTuple;
  } catch (e) {
    alert(e);
  }
}
</script>

<template>
  <div class="location-error">
    <div>
      <slot name="header"></slot>
      <div class="location-error__menu">
        <template v-if="coords && !isShowSpiner">
          <span class="location-error__city-name">{{ locality.name }}</span>
          <BaseButton text="Apply" @click="setLocation"></BaseButton>
        </template>
        <BaseSpiner v-if="isShowSpiner" />
      </div>
    </div>
    <div class="location-error__map-wrap">
      <mapbox-map
        :accessToken="API_KEY"
        @loaded="({ resize }) => resize()"
        @click="setMarker"
      >
        <mapbox-marker v-if="coords" :lngLat="coords" />
      </mapbox-map>
    </div>
  </div>
</template>
