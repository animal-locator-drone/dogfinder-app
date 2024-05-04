<template>
        <div class="card flex justify-content-center">
                <Dialog v-model:visible="visible" modal header="Tracking Dog" :style="{ width: '25rem' }">
                        <span class="p-text-secondary block mb-5">Update your information.</span>
                        <div
                                class="flex align-items-center w-full justify-content-center h-full bg-primary font-bold border-round">
                                <Image :image-class="'border-3 border-primary p-1 shadow-8 w-full max-h-30rem'"
                                        v-if="props.tracked_detection" :src="props.tracked_detection.images[0]"
                                        :preview="true" />
                                <h3 v-else>Please Select One</h3>
                        </div>
                        <div
                                class="flex flex-row align-items-center w-full justify-content-center h-5rem bg-primary font-bold border-round">
                                <div class="flex w-full p-1">
                                        <Button label="Nevermind (not my dog)" icon="pi pi-times"
                                                severity="warning" class="w-full" rounded @click="nevermind_click" />
                                </div>
                        </div>
                </Dialog>
        </div>
</template>

<script setup lang="ts">
import { ref, defineModel } from "vue";

import { Detection, use_detections_store } from '@/stores/detections';

import { use_missions_store } from '@/stores/missions';

const missions_store = use_missions_store();
const detections_store = use_detections_store();

const props = defineProps<{
        tracked_detection: Detection;
}>();

const visible = defineModel<boolean>('visible', {
        required: true,
        default: false
});

function nevermind_click(event: Event) {
        visible.value = false;
        missions_store.resume_mission();
        detections_store.dismiss_dog(props.tracked_detection.id);
}

</script>