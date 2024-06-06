<script setup lang="ts">
import CardProfile from '@/components/profile/CardProfile.vue';
import ResumeContainer from '@/components/profile/ResumeContainer.vue';
import ChartActivity from '@/components/profile/ChartActivity.vue';
</script>

<template>
  <div class="w-full">
    <CardProfile />
    <div class="flex items-start justify-between gap-7">
      <ChartActivity />
      <ResumeContainer />
    </div>
  </div>
</template>
