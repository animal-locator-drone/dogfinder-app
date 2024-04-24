<template>
        <Splitter layout="vertical" style="height: 80vh;">
                <SplitterPanel

                        class="flex flex-row flex-wrap" :size="25" :minSize="10">
                        <div class="h-full">
                        <MapVideo />
                </div>
                </SplitterPanel>
                <SplitterPanel
                        :size="75"
                >
                        <!-- DogFinder Component -->
                        <DogFinder />
                </SplitterPanel>
        </Splitter>
        <!-- <div class="mapvideo-dogfinder-grid"> -->



        <!-- AbortMission Component -->
        <div class="abort-button">
                <AbortMission />
        </div>
        <!-- </div> -->

</template>

<script setup lang="ts">
import AbortMission from '@/components/AbortMission.vue'
import MapVideo from '@/components/MapVideo.vue'
import DogFinder from '@/components/DogFinder.vue'

</script>

