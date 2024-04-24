<template>
        <div class="block">
                <Dropdown v-model="missions_store.selected_mission_id" :options="get_missions" optionValue="id"
                        optionLabel="name" placeholder="Select a Mission" class="w-full md:w-14rem" />
                <Button @click="confirm_selection" label="Confirm Selection" class="mt-3" />

                <Panel header="Mission Preview" class="mt-3">
                        <div class="flex justify-center">
                                <img src="https://via.placeholder.com/400" alt="Mission Preview" />
                        </div>
                </Panel>
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { use_missions_store } from '@/stores/missions';

const missions_store = use_missions_store()

const router = useRouter()

const { get_missions } = storeToRefs(missions_store)


const confirm_selection = () => {
        missions_store.select_mission(missions_store.selected_mission_id)
        .then(() => {
                router.push('/mission')
        }).catch((err) => {
                console.error('Error selecting mission:', err)
        })
}

</script>