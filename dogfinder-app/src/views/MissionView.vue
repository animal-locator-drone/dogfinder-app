<template>
        <!-- DroneStatusBar Component -->
        <DroneStatusBar />
        <!-- MapVideo Component -->
        <MapVideo />
        <!-- DogFinder Component -->
        <DogFinder />
        <!-- AbortMission Component -->
        <div class="flex justify-center abort-button">
                <AbortMission />
        </div>
        
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AbortMission from '@/components/AbortMission.vue'

const selected_mission = ref()



const missions = [
        { name: 'Path A', value: 'pathA' },
        { name: 'Path B', value: 'pathB' },
        { name: 'Path C', value: 'pathC' },
]

const confirm_selection = () => {
        console.log('Selected Mission:', selected_mission.value)

}

</script>

<style scoped>
        .abort-button {
                position: absolute;
                bottom: 0rem;
                right: 0rem;
        }
</style>