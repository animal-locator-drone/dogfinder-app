<template>
        <div class="drone-status-bar">
                <DroneStatusBar />
        </div>
        <v-app id="inspire" class="main-app">
                
                <v-navigation-drawer v-model="drawer" class="main-app">
                        <SettingsMenu />
                </v-navigation-drawer>

                <v-app-bar class="main-app">
                        <v-app-bar-nav-icon @click="drawer = !drawer">
                        <i class="pi pi-bars"></i>
                        </v-app-bar-nav-icon>

                        <v-app-bar-title>Application</v-app-bar-title>
                </v-app-bar>

                <v-main>
                        <RouterView />
                </v-main>
        </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SettingsMenu from './components/SettingsMenu.vue';
import DroneStatusBar from '@/components/DroneStatusBar.vue';
      
const drawer = ref(false)
</script>

<style>
.drone-status-bar {
        position: fixed;
        top: 0rem;
        left: 0rem;
        z-index: 9999;
        
}
.settings-menu {
        position: fixed;
        padding-top: 10rem;
}
.main-app {
        padding-top: 1.5rem;
}
</style>