<script setup lang="ts">
import AppPreloader from "./components/ThePreloader.vue";
</script>
<template>
  <RouterView v-slot="{ Component, route }">
    <transition mode="out-in" :duration="300" :key="route.path">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component"></component>
        </template>
        <template #fallback>
          <AppPreloader />
        </template>
      </Suspense>
    </transition>
  </RouterView>
</template>
