<template>
        <div class="flex align-items-center w-full justify-content-center h-20rem bg-primary font-bold border-round m-2">

                <Image 
                        v-if="get_selected_detection"
                        :src="get_selected_detection.images[0]"
                        :preview="true"
                        height="100%"
                        width="100%" 
                />

                <h3 v-else>Please Select One</h3>
        </div>
        <div class="flex flex-row align-items-center w-full justify-content-center h-5rem bg-primary font-bold border-round m-2">
                <div class="flex w-full">
                        <Button 
                                :disabled="!get_selected_detection"
                                label="Yes" 
                                icon="pi pi-check"
                                severity="success"
                                class="w-full"
                                rounded
                        />
                </div>
                <div class="flex w-full">
                        <Button 
                                :disabled="!get_selected_detection"
                                label="No"
                                icon="pi pi-times"
                                severity="danger"
                                class="w-full"
                                rounded
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