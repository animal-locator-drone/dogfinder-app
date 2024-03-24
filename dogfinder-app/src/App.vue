<template>
        <!-- <div class="drone-status-bar">
                <DroneStatusBar />
        </div> -->
        <v-layout>

                <v-navigation-drawer v-model="drawer">
                        <SettingsMenu />
                </v-navigation-drawer>

                <v-app-bar class="app-bar flex justify-between">
                        <v-app-bar-nav-icon @click="drawer = !drawer">
                                <i class="pi pi-bars"></i>
                        </v-app-bar-nav-icon>

                        <v-app-bar-title>Dogfinder App</v-app-bar-title>
                        
                                <!-- <v-system-bar class="status-bar"> -->
                                        <FontAwesomeIcon icon="fas fa-wifi-strong" />

                                        <FontAwesomeIcon icon="fas fa-battery-full" />
                                        
                                        <FontAwesomeIcon style="font-size: 1rem;" icon="fas fa-plane" />

                                        <span class="ms-2">3:13PM</span>
                                <!-- </v-system-bar> -->
                        <!-- </v-layout> -->
                </v-app-bar>

                <v-main class="main-app">
                        <RouterView />
                </v-main>
        </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SettingsMenu from './components/SettingsMenu.vue';
import DroneStatusBar from '@/components/DroneStatusBar.vue';
import { use_detections_store } from '@/stores/detections';
import { socket } from "@/socket";

const detections_store = use_detections_store();

detections_store.fetch_detections();

socket.connect();

const drawer = ref(false)
</script>

<style>
/* html { overflow-y: auto; } */

</style>