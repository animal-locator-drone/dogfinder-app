<template>
<Splitter layout="horizontal" class="h-full w-full">
        <SplitterPanel>
                <div class="flex flex-column w-full h-full justify-center items-center">
                        <DogCard />
                </div>
        </SplitterPanel>
        <SplitterPanel :size="75">
                <div class="flex flex-column w-full h-full justify-center items-center">
                        <DogGrid />
                </div>
        </SplitterPanel>
</Splitter>
</template>

<script setup lang="ts">
import { use_detections_store } from '@/stores/detections';
import { storeToRefs } from 'pinia';
import DogCard from '@/components/DogCard.vue';
import DogGrid from '@/components/DogGrid.vue';

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