<script setup lang="ts">
import type { IFile } from '@/types/post.interface';


const props = defineProps<{
  images: IFile[];
}>();

</script>

<template>

  <div v-if="props.images.length > 0" class="photo_grid p-1">
    <div v-for="image in props.images" :key="image.url" class="card">
      <img width="80px" :src="image.url" />
    </div>
  </div>

</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem, rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem; */
    /* border-radius: 4px; */
    transition: all 500ms;
    overflow: hidden;
    min-width: 80px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.photo_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
</style>