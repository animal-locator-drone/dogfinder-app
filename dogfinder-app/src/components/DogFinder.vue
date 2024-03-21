<template>
        <div v-if="!get_loading" class="flex align-items-center justify-content-center">
                        <div v-if="get_selected_detection" class="dogcard">
                                <div class="w-full md:w-5">
                                        <DogGallery
                                                :detection="detections_store.get_detection_by_id(get_selected_detection)" />
                                </div>
                                <div class="w-full md:w-2">
                                        <Divider layout="horizontal" class="hidden md:flex">
                                                <b>Is this your dog?</b>
                                        </Divider>

                                </div>
                                <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                                        <Button label="Yes" icon="pi pi-check" severity="success"
                                                class="w-10rem mx-auto"></Button>
                                        <Button label="No" icon="pi pi-times" severity="danger"
                                                class="w-10rem mx-auto"></Button>
                                </div>
                        </div>
                <div class="doggrid">
                        <VirtualScroller :items="get_detections" :itemSize="30" orientation="horizontal"
                                class="border-1 surface-border border-round" style="width: 40rem; height: 10rem;"
                                :pt="{ content: 'flex flex-row' }">
                                <template v-slot:item="{ item, options }">
                                        <div :class="['align-items-center p-2', { 'surface-hover': options.odd }]"
                                                style="width: 10rem;">

                                                <p class="m-0">{{ item.id }}</p>

                                                <DogGallery :detection="item" />
                                        </div>
                                </template>
                        </VirtualScroller>
                </div>
        </div>
</template>

<script setup lang="ts">
import { use_detections_store } from '@/stores/detections';
import { storeToRefs } from 'pinia';
import DogGallery from '@/components/DogGallery.vue';

const detections_store = use_detections_store();

const {
        get_detections,
        get_selected_detection,
        get_loading
} = storeToRefs(detections_store);

</script>

<style scoped>
.dogfinder {
        display: grid;
        grid-template-columns: 0.7fr 1.3fr;
        grid-template-rows: 0.9fr;
        grid-auto-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas: "dogcard doggrid";

}

.dogcard {
        grid-area: dogcard;
        /* width: 50%; */

}

.doggrid {
        grid-area: doggrid;
}
</style>