<template>
        <VideoStreamBig v-if="view_mode" />

        <MapViewBig v-else />

        <div class="max-h-10rem max-w-10rem m-0 p-0">
        <Dialog
                class="p-0 m-0"
                v-model:visible="visible"
                :closable="false"
                :draggable="true">

                <div v-if="view_mode"
                        class="h-9rem w-16-rem">
                        <MapViewMini />
                </div>
                <div v-else
                        class="h-9rem">
                        <VideoStreamMini />
                </div>

                <div class="fixed top-0 left-0">
                        <Button @click="switch_map_video" icon="pi pi-arrow-up-left" severity="secondary" outlined />
                </div>

        </Dialog>
        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MapViewMini from '@/components/MapViewMini.vue'
import MapViewBig from '@/components/MapViewBig.vue'
import VideoStreamBig from '@/components/VideoStreamBig.vue'
import VideoStreamMini from '@/components/VideoStreamMini.vue'

const visible = ref(true)

const view_mode = ref(true)

const switch_map_video = () => {
        console.log('Switching to map video')
        view_mode.value = !view_mode.value

}

</script>