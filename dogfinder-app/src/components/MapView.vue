<template>
        <div class="map-view">
                <LMap 
                        ref="map" 
                        v-model:zoom="zoom"
                        :center="[47.41322, -1.219482]"
                        >
                        <LTileLayer 

                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                                name="OpenStreetMap"></LTileLayer>
                </LMap>
        </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

const zoom = ref(13);
</script>

<style scoped>
.map-view {
        position: relative;
        bottom: 0rem;
        left: 0rem;
        width: 100%;
        height: 100%;
}

</style>