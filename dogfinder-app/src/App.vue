<template>
        <div class="drone-status-bar">
                <DroneStatusBar />
        </div>
        <v-layout>
                
                <v-navigation-drawer v-model="drawer" class="avoid-status-bar">
                        <SettingsMenu />
                </v-navigation-drawer>

                <v-app-bar class="avoid-status-bar app-bar flex justify-between">
                        <v-app-bar-nav-icon @click="drawer = !drawer">
                        <i class="pi pi-bars"></i>
                        </v-app-bar-nav-icon>

                        <v-app-bar-title>Dogfinder App</v-app-bar-title>
                </v-app-bar>

                <v-main class="main-app">
                <RouterView  class="avoid-status-bar" />
                </v-main>
        </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SettingsMenu from './components/SettingsMenu.vue';
import DroneStatusBar from '@/components/DroneStatusBar.vue';
      
const drawer = ref(false)
</script>

<style>
/* html { overflow-y: auto; } */
.drone-status-bar {
        position: fixed;
        top: 0rem;
        left: 0rem;
        z-index: 9999;
        
}
.settings-menu {
        /* position: fixed; */
        /* padding-top: 10rem; */
}
.avoid-status-bar {
        padding-top: 1.5rem;
}
.main-app {
        padding-top: 3rem;
}
</style>