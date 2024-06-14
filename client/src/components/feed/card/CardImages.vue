<script setup lang='ts'>
import type { IFile } from '@/types/post.interface';
import ImageItem from './ImageItem.vue';


const props = defineProps<{ 
  images: IFile[];
}>();

</script>
<template>
    <div class="photo_grid">
        <ImageItem v-for="image in props.images" :key="image.url" :image="image" />
    </div>
</template>
<style scoped>

.photo_grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    /* grid-auto-rows: 240px; */
}

</style>