<script lang="ts" setup>
import { defineEmits, ref, Ref } from "vue";
type Tab = "HourlyForecast" | "WeekForecast";

const emit = defineEmits(["toggle"]);

const activeTab: Ref<Tab> = ref("WeekForecast");

function changeTab(tab: Tab) {
  if (tab == activeTab.value) {
    return;
  }
  activeTab.value = tab;
  emit("toggle", tab);
}

function isActive(tab: Tab) {
  return tab == activeTab.value;
}
</script>

<template>
  <header class="content-main__header">
    <div class="content-main__header-body">
      <a
        class="title-btn"
        :class="{ 'title-btn_active': isActive('HourlyForecast') }"
        @click="changeTab('HourlyForecast')"
        >Today</a
      >
      <a
        class="title-btn"
        :class="{ 'title-btn_active': isActive('WeekForecast') }"
        @click="changeTab('WeekForecast')"
        >Week</a
      >
    </div>
    <div>
      <!-- <div>
        <button></button>
        <button></button>
      </div> -->
    </div>
  </header>
</template>
