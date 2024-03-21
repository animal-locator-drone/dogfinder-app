<template>
        <div v-if="!get_loading" class="flex align-items-center justify-content-center">
                <Splitter style="height: 29rem; width: 100%;">
                        <SplitterPanel class="flex align-items-center " :size="25" :minSize="10">
                                <DogCard />
                        </SplitterPanel>
                        <SplitterPanel class="flex" :size="75">
                                <DogGrid />
                        </SplitterPanel>
                </Splitter>


        </div>
</template>

<script setup lang="ts">
import { use_detections_store } from '@/stores/detections';
import { storeToRefs } from 'pinia';
import DogGallery from '@/components/DogGallery.vue';
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