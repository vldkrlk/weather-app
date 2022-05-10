<script lang="ts" setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="error">
    <span class="error__code">404</span>
    <p class="error__description">Page Not Found</p>
    <BaseButton text="Go back" @click="router.go(-1)"></BaseButton>
  </div>
</template>
