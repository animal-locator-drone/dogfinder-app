<template>
        <Galleria 
                :value="validate_detection(props.detection).images"
                :numVisible="5"
                containerStyle="max-width: 640px"
                :circular="true"
                :autoPlay="true"
                :transitionInterval="2000"
                :showThumbnails="false">
                

                <template #item="slotProps">
                        <img :src="slotProps.item"
                                style="width: 100%; display: block"
                                @click="select_detection" />
                </template>

                <template #thumbnail="slotProps">
                        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </template>
        </Galleria>
</template>

<script setup lang="ts">
import type { Detection } from '@/stores/detections';
import { use_detections_store } from '@/stores/detections';

const props = defineProps<{
        detection: Detection | null
}>()

const detections_store = use_detections_store();

const select_detection = () => {
        console.log('Selected Detection:', props.detection)
        if (props.detection){
                detections_store.select_detection(props.detection.id);
        } else {
                console.log('No detection to select')
        }
}

function validate_detection(detection: Detection | null): Detection{
        if (detection){
                return detection
        } else {
                return {
                        id: "0",
                        location: [0, 0],
                        time: new Date().toISOString(),
                        images: [],
                }
        }
}
</script>