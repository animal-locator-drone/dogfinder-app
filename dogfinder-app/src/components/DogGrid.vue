<template>
        <div class="grid-container">
                <DogGallery v-for="detection in get_detections" :key="detection.id" :detection="detection" />
        </div>


</template>

<script setup lang="ts">
import { use_detections_store } from '@/stores/detections';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import DogGallery from '@/components/DogGallery.vue';

const detections_store = use_detections_store();

const {
        get_detections,
        get_selected_detection,
        get_loading
} = storeToRefs(detections_store);


</script>

<style scoped>
.grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
        gap: 1px;
        overflow-y: auto;
        max-height: 100%;
        /* Adjust based on your layout */
}
</style>