<template>
        <Toolbar  class="p-2 m-2 border-round-lg border-round">
                <template #start>
                        <Button icon="pi pi-bars" rounded @click="drawer = !drawer" />
                </template>

                <template #center>
                        <p class="text-base p-0 m-0">
                                Drone Finder
                        </p>
                </template>

                <template #end>
                        <FontAwesomeIcon icon="fas fa-wifi-strong" />

                        <FontAwesomeIcon icon="fas fa-battery-full" />

                        <FontAwesomeIcon style="font-size: 1rem;" icon="fas fa-plane" />

                        <span class="ms-2">3:13PM</span>
                </template>
        </Toolbar>
</template>

<script setup lang="ts">
const drawer = defineModel<boolean>('drawer',{
        required: true
});

</script>