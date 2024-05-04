<template>
<TrackDog 
        v-model:visible="track_dog_visible" 
        :tracked_detection="get_selected_detection"
/>
<Toast />
<ConfirmDialog group="dismiss_dog"></ConfirmDialog>
<div
        class="flex align-items-center w-full justify-content-center h-full bg-primary font-bold border-round">
        <Image
                :image-class="'border-3 border-primary p-1 shadow-8 w-full max-h-30rem'"
                v-if="get_selected_detection"
                :src="get_selected_detection.images[0]"
                :preview="true"
        />
        <h3 v-else>Please Select One</h3>
</div>
<div
        class="flex flex-row align-items-center w-full justify-content-center h-5rem bg-primary font-bold border-round">
        <div class="flex w-full p-1">
                <Button
                        :disabled="!get_selected_detection"
                        label="Yes"
                        icon="pi pi-check"
                        severity="success"
                        class="w-full"
                        rounded
                        @click="yes_button_click"
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
                        @click="no_button_click"
                />
        </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { use_detections_store, Detection } from '@/stores/detections';
import { storeToRefs } from 'pinia';
import { use_missions_store } from '@/stores/missions';

import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

import TrackDog from '@/components/TrackDog.vue';

const confirm = useConfirm();
const toast = useToast();

const track_dog_visible = ref(false)


const detections_store = use_detections_store();
const missions_store = use_missions_store();

const {
        get_detections,
        get_selected_detection,
        get_loading
} = storeToRefs(detections_store);

function yes_button_click(event: Event) {
        if (get_selected_detection.value) {
                missions_store.track_dog(get_selected_detection.value.id);
                track_dog_visible.value = true;
        }


}

function no_button_click(event: Event) {
        confirm.require({
                message: 'Are you sure this is not your dog? This dog will be ignored',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                rejectClass: 'p-button-warning',
                rejectLabel: 'Cancel',
                acceptClass: 'p-button-danger',
                acceptLabel: 'Dismiss Dog',
                group: 'dismiss_dog',
                accept: () => {
                        if (get_selected_detection.value) {
                                detections_store.dismiss_dog(get_selected_detection.value.id);
                        }
                        toast.add({ severity: 'warn', summary: 'Dismissed', detail: 'Detection Dismissed', life: 3000 });
                },
                reject: () => {
                        console.log('reject');
                }
        });
}

</script>