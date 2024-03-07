<template>     
        <!-- MapVideo Component -->
        <MapVideo />
        <!-- DogFinder Component -->
        <!-- <DogFinder /> -->
        <!-- AbortMission Component -->
        <div class="abort-button">
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
                position: fixed;
                bottom: 0rem;
                right: 0rem;
                z-index: 9999;
        }
</style>