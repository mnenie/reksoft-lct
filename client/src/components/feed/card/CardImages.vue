<script setup lang='ts'>
import ImageItem from './ImageItem.vue';


const props = defineProps<{ 
  images: string[];
}>();

</script>
<template>
    <div class="photo_grid">
        <ImageItem v-for="image in props.images" :key="image" :image="image" />
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