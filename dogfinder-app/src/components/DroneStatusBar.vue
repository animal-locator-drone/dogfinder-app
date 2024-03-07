<template>
        <v-layout>
                <v-system-bar class="status-bar">
                        <v-icon class="pi pi-bars"></v-icon>
                        <v-icon 
                                icon="mdi-signal"
                                class="ms-2">
                        </v-icon>
                        <v-icon icon="mdi-battery" class="ms-2"></v-icon>

                        <span class="ms-2">3:13PM</span>
                </v-system-bar>
        </v-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>
.status-bar {
        height: 1rem;
        max-height: 1.5rem;
}
</style>