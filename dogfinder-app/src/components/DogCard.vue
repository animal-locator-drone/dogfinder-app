<template>
        <div class="flex align-items-center w-full justify-content-center h-full bg-primary font-bold border-round">

                <Image 
                        :image-class="'border-3 border-primary p-1 shadow-8 w-full'"
                        v-if="get_selected_detection"
                        :src="get_selected_detection.images[0]"
                        :preview="true"
                />

                <h3 v-else>Please Select One</h3>
        </div>
        <div class="flex flex-row align-items-center w-full justify-content-center h-5rem bg-primary font-bold border-round">
                <div class="flex w-full p-1">
                        <Button 
                                :disabled="!get_selected_detection"
                                label="Yes" 
                                icon="pi pi-check"
                                severity="success"
                                class="w-full"
                                rounded
                                @click="() => missions_store.track_dog('test_dog')"
                        />
                </div>
                <div class="flex w-full p-1">
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
import { use_missions_store } from '@/stores/missions';

const detections_store = use_detections_store();
const missions_store = use_missions_store();


const {
        get_detections,
        get_selected_detection,
        get_loading
} = storeToRefs(detections_store);

</script>