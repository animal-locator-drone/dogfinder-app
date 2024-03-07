<template>
        <div v-if="map_view" class="main-view-video">
                <VideoStream />
        </div>
        <div v-else class="main-view-map">
                <MapView />
        </div>


        <Dialog v-model:visible="visible" :closable="false" :style="{ width: '24rem', height: '15rem' }"
                :draggable="true">

                <div v-if="map_view" class="mini-view-map">
                        <MapView />
                </div>
                <div v-else class="mini-view-video">
                        <VideoStream />
                </div>


                <div class="flex justify-between items-center switch-screens">
                        <Button @click="switch_map_video" icon="pi pi-arrow-up-left" severity="secondary" outlined />
                </div>

        </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import MapView from '@/components/MapView.vue'
import VideoStream from '@/components/VideoStream.vue'

const visible = ref(true)

const map_view = ref(true)

const switch_map_video = () => {
        console.log('Switching to map video')
        map_view.value = !map_view.value

}

</script>

<style scoped>
.switch-screens {
        position: fixed;
        top: 0rem;
        left: 0rem;
}
.mini-view-map {
        /* disable scrollbar */
        /* overflow: hidden; */
        position: relative;
        height: 10rem;
        width: 20rem;
        display: grid;
}
.mini-view-video {
        /* disable scrollbar */
        /* overflow: hidden; */
        position: relative;
        height: 100%;
        width: 100%;
        display: grid;
}

.main-view-video {
        display: grid;
        height: 35rem;
        /* height: 50%; */
}

.main-view-map {
        display: grid;
        height: 35rem;
        width: 50rem;
}
</style>
