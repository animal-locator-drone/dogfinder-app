<template>
        <Splitter layout="vertical" style="height: 80vh;">
                <SplitterPanel :size="25" :minSize="10">
                        <div class="h-full justify-center items-center">
                                <MapVideo />
                        </div>
                        
                </SplitterPanel>
                <SplitterPanel :size="75" class="w-full" style="height: 10vh;">
                        <div class="h-full justify-center items-center">
                                <DogFinder />
                        </div>
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

