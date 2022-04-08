<script setup lang="ts">
import PageMain from "./pages/page-main.vue";
</script>
<template>
  <Suspense>
    <template #default>
      <PageMain></PageMain>
    </template>
    <template #fallback>Loading...</template>
  </Suspense>
</template>
