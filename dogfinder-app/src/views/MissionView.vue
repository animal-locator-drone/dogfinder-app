<template>     
        <!-- MapVideo Component -->
        <MapVideo />
        <!-- DogFinder Component -->
        <!-- <DogFinder /> -->
        <!-- AbortMission Component -->
        <div class="flex justify-center abort-button">
                <AbortMission />
        </div>
        
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AbortMission from '@/components/AbortMission.vue'
import MapVideo from '@/components/MapVideo.vue'

</script>

<style scoped>
        .abort-button {
                position: absolute;
                bottom: 0rem;
                right: 0rem;
        }
        .drone-status-bar {
                position: fixed;
                top: 0rem;
                left: 0rem;
        }
</style>