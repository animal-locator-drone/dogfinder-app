<template>
        <div>
                <h1>Select A Search Path</h1>
                <div>
                        <Dropdown v-model="selected_mission" :options="missions" optionLabel="name" placeholder="Select a Mission" class="w-full md:w-14rem" />
                        <Button label="Confirm" :disabled="!selected_mission" @click="confirm_selection" />
                </div>
        </div>
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