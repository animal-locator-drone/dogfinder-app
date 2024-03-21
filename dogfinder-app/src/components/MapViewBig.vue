<template>
        <div >
                <l-map class="mymap" ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
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

// export default {
//   components: {
//     LMap,
//     LTileLayer,
//   },
//   data() {
//     return {
//       zoom: 2,
//     };
//   },
// };
</script>

<style>
.mymap {
  height: 100%;
  width: 100%;
  margin: 0%;
  padding: 0%;
}
</style>