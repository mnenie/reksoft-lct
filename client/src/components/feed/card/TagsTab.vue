<script setup lang="ts">
import { Button } from '@/components/ui/button'

const props = defineProps<{ 
  tags: string[]
}>();

</script>

<template>

    <div class="flex flex-row space-x-1">
        <Button v-for="tag in props.tags" :key="tag" variant="link" class="text-sm px-2 py-1 rounded-2xl bg-gray-100">{{ tag }}</Button>
    </div>

</template>