<script setup lang="ts">
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { PlusCircleIcon } from 'lucide-vue-next';
</script>

<template>
  <div class="flex h-[46px] items-center justify-between px-4">
    <h1 class="text-lg font-medium">News</h1>
    <div>
      <Button size="sm" variant="outline" class="flex h-8 items-center border-dashed">
        <PlusCircleIcon class="mr-2 h-4 w-4" />
        <span class="text-sm">Add a New</span>
      </Button>
    </div>
  </div>
  <Separator />
</template>
