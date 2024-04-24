<template>
        <div 
                class="flex flex-row flex-wrap overflow-auto h-full w-full">
                <div 
                        v-for="detection in get_detections"
                        class="w-6rem h-6rem m-1 p-0"
                >
                        <Image 
                                :image-class="determine_class_image(detection)"
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

function determine_class_image(detection: any) {
        if (!get_selected_detection.value) {
                return 'border-0';
        }
        if (detection.id === get_selected_detection.value.id) {
                return 'border-3 border-primary p-2 shadow-8';
        } else {
                return 'border-0';
        }
}

</script>