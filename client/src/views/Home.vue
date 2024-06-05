<script setup lang="ts">
import FeedContainer from '@/components/feed/FeedContainer.vue';
import { Search } from 'lucide-vue-next';
import { Input } from '@/components/ui/input';
import { ref } from 'vue';

const search = ref('');
</script>

<template>
  <div class="w-full">
    <div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <form>
        <div class="relative">
          <Search class="absolute left-2 top-2.5 size-4 text-muted-foreground" />
          <Input v-model="search" placeholder="Search" class="pl-8" />
        </div>
      </form>
    </div>
    <FeedContainer />
  </div>
</template>
