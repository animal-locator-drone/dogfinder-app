<template>
        <div 
                class="flex flex-row flex-wrap overflow-scroll h-full">
                <div 
                        v-if="get_selected_detection"
                        v-for="detection in get_detections"
                        class="w-6rem h-6rem m-0 p-1 border-0"
                >

                        <Image 
                                :image-class="detection.id === get_selected_detection.id ? 'border-3 border-blue-500 p-1' : 'border-0'"
                                :key="detection.id"
                                :src="detection.images[0]"
                                :preview="false"
                                height="100%"
                                width="100%" 
                                @click="detections_store.select_detection(detection.id)"
                        />
                </div>
        </div>


</template>

<script setup lang="ts">
import { use_detections_store } from '@/stores/detections';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

const detections_store = use_detections_store();

const {
        get_detections,
        get_selected_detection,
        get_loading
} = storeToRefs(detections_store);


</script>