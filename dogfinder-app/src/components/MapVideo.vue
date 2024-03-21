<template>
        <div v-if="map_view" class="main-view-video">
                <VideoStreamBig />
        </div>
        <div v-else class="main-view-map">
                <MapViewBig />
        </div>

        <Dialog 
                class="pipdialog"
                v-model:visible="visible"
                :closable="false" 
                :style="{
                        width: '23rem',
                        height: '16rem',
                        bottom: '0rem',
                        right: '0rem',
                        position: 'fixed'
                }"
                :draggable="true">

                <div v-if="map_view" class="mini-view-map">
                        <MapViewMini />
                </div>
                <div v-else class="mini-view-video">
                        <VideoStreamMini />
                </div>

                <div class="flex justify-between items-center switch-screens">
                        <Button @click="switch_map_video" icon="pi pi-arrow-up-left" severity="secondary" outlined />
                </div>

        </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MapViewBig from '@/components/MapViewBig.vue'
import MapViewMini from '@/components/MapViewMini.vue'
import VideoStreamBig from '@/components/VideoStreamBig.vue'
import VideoStreamMini from '@/components/VideoStreamMini.vue'

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
        margin: 0%;
        padding: 0%;
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
        /* display:  */
        /* height: 35rem; */
        height: 100%;
        display: flex;
        margin: 0%;
}

.main-view-map {
        display: grid;
        height: 100%;
        width: 100%;
}
</style>
