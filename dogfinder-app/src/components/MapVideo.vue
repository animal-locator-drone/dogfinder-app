<template>
        <!-- <Card> -->

                <!-- <template #content> -->
                        <div v-if="map_view" class="map-view-main">
                                <VideoStream />
                        </div>
                        <div v-else class="map-view-main">
                                <MapView />
                        </div>
                <!-- </template> -->
        <!-- </Card> -->

        <Dialog v-model:visible="visible" :closable="false" :style="{ width: '24rem', height: '15rem' }"
                :draggable="true">

                <Card>

                        <template #content>
                                <div v-if="map_view" class="map-view-mini">
                                        <MapView />
                                </div>
                                <div v-else class="map-view-mini">
                                        <VideoStream />
                                </div>
                        </template>
                </Card>

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
.map-view-mini {
        position: fixed;
        bottom: 0rem;
        left: 0rem;
        width: 100%;
        height: 85%;
}
.map-view-main {
        position: fixed;
        bottom: 0rem;
        left: 0rem;
        width: 100%;
        height: 100%;
}

</style>
