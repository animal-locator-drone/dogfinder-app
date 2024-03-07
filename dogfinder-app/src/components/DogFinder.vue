<template>
        <div class="dogfinder">
                <div class="dogcard">
                        <!-- <Card style="height: 15rem;">
                                <template #title>Dog Found!</template>
<template #content>
                                        <img src="https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                                                alt="Dog" style="width: 30%; height: 50%;">
                                        <p class="m-0">
                                                
                                        </p>
                                        <Button @click="dog_found" severity="success" class="mt-2" label="Yes" />
                                        <Button @click="dismiss_dog" severity="danger" class="mt-2" label="No" />
                                </template>
</Card> -->
                        <div class="card">
                                <div class="flex flex-column md:flex-row">
                                        <div
                                                class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                                                <img src="https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                                                alt="Dog" style="width: 100%; height: 100%;">
                                                
                                        </div>
                                        <div class="w-full md:w-2">
                                                <Divider layout="vertical" class="hidden md:flex"><b>Is this your dog?</b></Divider>
                                                <Divider layout="horizontal" class="flex md:hidden" align="center">
                                                        <b>Is this your dog?</b></Divider>
                                        </div>
                                        <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
                                                <Button label="Yes" icon="pi pi-check" severity="success"
                                                        class="w-10rem mx-auto"></Button>
                                                <Button label="No" icon="pi pi-times" severity="danger"
                                                        class="w-10rem mx-auto"></Button>
                                        </div>
                                </div>
                        </div>
                </div>
                <div class="doggrid">
                        <VirtualScroller :items="dog_detections" :itemSize="30" orientation="horizontal"
                                class="border-1 surface-border border-round" style="width: 40rem; height: 10rem;"
                                :pt="{ content: 'flex flex-row' }">
                                <template v-slot:item="{ item, options }">
                                        <div :class="['align-items-center p-2', { 'surface-hover': options.odd }]"
                                                style="width: 10rem;">
                                                <img :src="item.img_src" alt="Dog" style="width: 100%; height: 50%;">
                                                <p class="m-0">{{ item.name }}</p>

                                        </div>
                                </template>
                        </VirtualScroller>
                </div>
        </div>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'

const dogFound = ref(false)

const dog_found = () => {
        console.log('Dog found')
        dogFound.value = true
}

const dismiss_dog = () => {
        console.log('Dog dismissed')
        dogFound.value = false
}

const dog_detections = computed(() => {
        return [
                {
                        id: 1,
                        name: 'Doggo 1',
                        img_src: "https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                },
                {
                        id: 2,
                        name: 'Doggo 2',
                        img_src: "https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                },
                {
                        id: 3,
                        name: 'Doggo 3',
                        img_src: "https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                },
                {
                        id: 4,
                        name: 'Doggo 4',
                        img_src: "https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                },
                {
                        id: 5,
                        name: 'Doggo 5',
                        img_src: "https://www.zbrushcentral.com/uploads/default/original/4X/3/2/d/32d485c620d70a154f0419d526e33299ab809fd2.jpeg"
                }
        ]
})

</script>

<style scoped>
.dogfinder {
        display: grid;
        grid-template-columns: 0.7fr 1.3fr;
        grid-template-rows: 0.9fr;
        grid-auto-rows: 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        justify-content: right;
        align-content: space-around;
        justify-items: center;
        align-items: stretch;
        grid-template-areas:
                "dogcard doggrid";
        width: 100%;
        height: 100%;

}

.dogcard {
        grid-area: dogcard;
        /* width: 50%; */

}

.doggrid {
        grid-area: doggrid;
}
</style>