<script setup lang="ts">
import type { IFile } from '@/types/post.interface';
import { ref } from 'vue';


const props = defineProps<{ 
  image: IFile;
}>();

const img = new Image();
img.onload = function() {
    if (this.width > 400) isWide.value = true;
    if (this.heigth > 400) isTall.value = true;
}
img.src = `placeholders/${props.image}`;

const isWide = ref<boolean>(false);
const isTall = ref<boolean>(false);

</script>
<template>

    <div class="card" :class="{'card_wide': isWide, 'card_tall': isTall}">
        <img
        width="500px"
        :src="props.image.url" 
        alt=""
        >
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
    min-width: 240px;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
@media screen and (min-width: 1120px) {
    .card_tall {
        grid-row: span 2 / auto;
    }
    .card_wide {
        grid-column: span 2 / auto;
    }
}
</style>