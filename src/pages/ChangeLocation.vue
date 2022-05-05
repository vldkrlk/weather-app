<script lang="ts" setup>
import LocationChanger from "@/components/TheLocationChanger.vue";
</script>

<template>
  <div class="location-error">
    <LocationChanger>
      <template #header>
        <h1>Change your location</h1>
      </template>
    </LocationChanger>
  </div>
</template>
