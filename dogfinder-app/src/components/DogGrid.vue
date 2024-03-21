<template>
        <VirtualScroller :items="get_detections" :itemSize="30" orientation="horizontal"
                class="border-1 surface-border border-round" style="width: 100%; height: 100%;"
                :pt="{ content: 'flex flex-row' }">
                <template v-slot:item="{ item, options }">
                        <div :class="['align-items-center p-2', { 'surface-hover': options.odd }]"
                                style="width: 10rem;">

                                <p class="m-0">{{ item.id }}</p>

                                <DogGallery :detection="item" />
                        </div>
                </template>
        </VirtualScroller>
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
.dogcard {
        height: 100%;
        width: auto;
}
</style>