<template>
        <div class="mapvideo-dogfinder-grid">
                <!-- MapVideo Component -->
                <div class="map-video">
                        <MapVideo />
                </div>
                <!-- DogFinder Component -->
                <div class="dog-finder">
                        <DogFinder />
                </div>

                <!-- AbortMission Component -->
                <div class="abort-button">
                        <AbortMission />
                </div>
        </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
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

.mapvideo-dogfinder-grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 0.5fr;
        grid-auto-rows: 1fr;
        gap: 0px 0px;
        grid-gap: 0px 0px;
        grid-auto-flow: row;
        justify-content: center;
        align-content: space-around;
        justify-items: center;
        align-items: stretch;
        grid-template-areas:
                "map-video"
                "dog-finder";
}

.dog-finder {
        grid-area: dog-finder;
        /* justify-self: center;
        align-self: center; */
}

.map-video {
        grid-area: map-video;
        justify-self: center;
        align-self: center;
}
</style>