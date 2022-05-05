<script lang="ts" setup>
import LocationChanger from "@/components/TheLocationChanger.vue";
</script>

<template>
  <div class="location-error">
    <LocationChanger>
      <template #header>
        <h1>We have some problems with defining your location</h1>
        <p>
          You should to allow location on this site or set location manually:
        </p>
      </template>
    </LocationChanger>
  </div>
</template>
