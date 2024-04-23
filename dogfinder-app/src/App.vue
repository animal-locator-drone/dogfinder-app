<template>
        <div class="block">
                <div class="col">
                        <NavbarMenu v-model:drawer="drawer" />
                </div>
        </div>
        <div class="block">
                <div class="col">
                        <RouterView />
                </div>
        </div>
        <div class="card flex justify-content-center">
                <Sidebar v-model:visible="drawer" header="Sidebar">
                        <SettingsMenu />
                </Sidebar>
        </div>


        
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SettingsMenu from './components/SettingsMenu.vue';
import DroneStatusBar from '@/components/DroneStatusBar.vue';
import { use_detections_store } from '@/stores/detections';
import { socket } from "@/socket";
import { use_missions_store } from '@/stores/missions';
import NavbarMenu from './components/NavbarMenu.vue';

const missions_store = use_missions_store()

missions_store.fetch_missions()
const detections_store = use_detections_store();

console.log('detections_store:', detections_store);

detections_store.fetch_detections();

socket.connect();

const drawer = ref(false)
</script>

<style>
/* html { overflow-y: auto; } */
</style>