<template>
        <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div class="text-3xl font-medium text-900 mb-3">Select A Search Mission</div>
                <div class="font-medium text-500 mb-3">
                        <Dropdown v-model="selected_mission" :options="missions" optionLabel="name"
                                placeholder="Select a Mission" class="w-full md:w-14rem" />
                        <Button 
                                @click="confirm_selection"
                                label="Confirm Selection" class="mt-3" />

                </div>
                <div style="height: 150px" class="border-2 border-dashed surface-border">
                Map Preview Here
                </div>
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()

const selected_mission = ref()

const missions = [
        { name: 'Path A', value: 'pathA' },
        { name: 'Path B', value: 'pathB' },
        { name: 'Path C', value: 'pathC' },
]

const confirm_selection = () => {
        console.log('Selected Mission:', selected_mission.value)
        router.push('/mission')
}

</script>