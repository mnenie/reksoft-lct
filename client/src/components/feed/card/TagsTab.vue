<script setup lang="ts">

const props = defineProps<{
  tags: string[];
}>();
</script>

<template>
  <div class="flex flex-row space-x-1 space-y-1 text-wrap flex-wrap">
    <span
      v-for="tag in props.tags"
      :key="tag"
      class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-sm font-semibold text-zinc-700"
    >
      #{{ tag }}
    </span>
  </div>
</template>
