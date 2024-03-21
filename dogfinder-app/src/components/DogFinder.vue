<template>
        <div v-if="!get_loading" class="flex align-items-center justify-content-center">
                <Splitter style="height: 29rem; width: 100%;">
                        <SplitterPanel class="flex align-items-center " :size="25" :minSize="10">
                                <div  v-if="get_selected_detection" class="dogcard">
                                        <div class="w-full md:w-8">
                                                <DogGallery
                                                        :detection="detections_store.get_detection_by_id(get_selected_detection)" />
                                        </div>
                                        <div class="w-full md:w-8">
                                                <Divider layout="horizontal" class="md-flex" style="height: 2px;">
                                                        <b>Is this your dog?</b>
                                                </Divider>

                                        </div>
                                        <div class="w-full md:w-8">
                                                <Button label="Yes" icon="pi pi-check" severity="success"
                                                        class="w-19rem mx-auto"></Button>
                                                <Button label="No" icon="pi pi-times" severity="danger"
                                                        class="w-19rem mx-auto"></Button>
                                        </div>
                                </div>
                                <div  v-else class="dogcard">
                                        <div class="w-full md:w-8">
                                                <DogGallery
                                                        :detection="detections_store.get_detection_by_id(get_selected_detection)" />
                                        </div>
                                        <div class="w-full md:w-8">
                                                <Divider layout="horizontal" class="md-flex" style="height: 2px;">
                                                        <b>please select a dog</b>
                                                </Divider>

                                        </div>
                                        <div class="w-full md:w-8">
                                                <Button label="" icon="" severity="warning"
                                                        class="w-19rem mx-auto"></Button>
                                                <Button label="" icon="" severity="warning"
                                                        class="w-19rem mx-auto"></Button>
                                        </div>
                                </div>
                        </SplitterPanel>
                        <SplitterPanel class="flex" :size="75">

                                <VirtualScroller :items="get_detections" :itemSize="30" orientation="horizontal"
                                        class="border-1 surface-border border-round"
                                        style="width: 100%; height: 100%;" :pt="{ content: 'flex flex-row' }">
                                        <template v-slot:item="{ item, options }">
                                                <div :class="['align-items-center p-2', { 'surface-hover': options.odd }]"
                                                        style="width: 10rem;">

                                                        <p class="m-0">{{ item.id }}</p>

                                                        <DogGallery :detection="item" />
                                                </div>
                                        </template>
                                </VirtualScroller>
                        </SplitterPanel>
                </Splitter>


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
.dogcard {
        height: 100%;
        width: auto;
}
</style>