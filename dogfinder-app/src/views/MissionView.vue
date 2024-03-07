<template>
        <!-- DroneStatusBar Component -->
        <DroneStatusBar />
        <!-- MapVideo Component -->
        <MapVideo />
        <!-- DogFinder Component -->
        <DogFinder />
        <!-- AbortMission Component -->
        <AbortMission />
</template>

<script setup lang="ts">
import { ref } from 'vue'

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