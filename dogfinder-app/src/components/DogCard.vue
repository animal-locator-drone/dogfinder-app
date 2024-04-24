<template>
        <div class="w-full h-auto m-0 p-1">

                <Image 
                        v-if="get_selected_detection"
                        :src="get_selected_detection.images[0]"
                        :preview="true"
                        height="100%"
                        width="100%" 
                />

                <h3 v-else>Please Select One</h3>
        </div>
        <div class="w-full grid p-2">
                <div class="col p-1 m-2">
                        <Button 
                                :disabled="!get_selected_detection"
                                label="Yes" 
                                icon="pi pi-check"
                                severity="success"
                                class="w-full"
                        />
                </div>
                <div class="col p-1 m-2">
                        <Button 
                                :disabled="!get_selected_detection"
                                label="No"
                                icon="pi pi-times"
                                severity="danger"
                                class="w-full"
                        />
                </div>
        </div>
</template>

<script setup lang="ts">
import { use_detections_store } from '@/stores/detections';
import { storeToRefs } from 'pinia';

const detections_store = use_detections_store();

const {
        get_detections,
        get_selected_detection,
        get_loading
} = storeToRefs(detections_store);

</script>