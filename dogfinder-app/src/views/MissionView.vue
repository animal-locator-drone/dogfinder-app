<template>
        <Splitter style="height: 100rem; width: 100%;" layout="vertical">
                <SplitterPanel class="" :size="25" :minSize="10">
                        <!-- MapVideo Component -->
                        <div class="map-video">
                                <MapVideo />
                        </div>
                </SplitterPanel>
                <SplitterPanel class="flex align-items-center" :size="75">
                        <!-- DogFinder Component -->
                        <div class="dog-finder">
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

<style scoped>
.abort-button {
        position: fixed;
        bottom: 0rem;
        right: 0rem;
        z-index: 9999;
}



.dog-finder {
        height: 100%;
        width: 100%;
}

.map-video {
        /* grid-area: map-video; */
        height: 100%;
        /* justify-self: center; */
        /* align-self: center; */
}
</style>