<template>
        <div class="w-full h-full">
                <l-map 
                ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
                <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                        name="OpenStreetMap"></l-tile-layer>
                </l-map>
        </div>
        
</template>

<script setup lang="ts">
import { ref } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

const zoom = ref(13);

</script>