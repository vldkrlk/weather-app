<script setup lang="ts">
import PageMain from "./pages/page-main.vue";
import AppPreloader from "./components/AppPreloader.vue";
</script>
<template>
  <Suspense>
    <template #default>
      <PageMain></PageMain>
    </template>
    <template #fallback>
      <AppPreloader />
    </template>
  </Suspense>
</template>
