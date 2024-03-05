<template>
        <div class="card flex justify-content-center">
                <Button icon="pi pi-bars" @click="visible = true" />
                <Sidebar v-model:visible="visible">
                        <template #header>
                                <h2>Dog Finder App</h2>
                        </template>
                        <PanelMenu :model="items" class="w-full md:w-20rem">

                                <template #item="{ item }">
                                        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route"
                                                custom>
                                                <a v-ripple
                                                        class="flex align-items-center cursor-pointer text-color px-3 py-2"
                                                        :href="href" @click="navigate">
                                                        <span :class="item.icon" />
                                                        <span class="ml-2 text-color">{{ item.label }}</span>
                                                </a>
                                        </router-link>
                                        <a v-else v-ripple
                                                class="flex align-items-center cursor-pointer text-color px-3 py-2"
                                                :href="item.url" :target="item.target">
                                                <span :class="item.icon" />
                                                <span class="ml-2">{{ item.label }}</span>
                                                <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
                                        </a>
                                </template>
                        </PanelMenu>
                </Sidebar>

        </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'


const visible = ref(true)

// Create mission select, map, and system stats menu items
const items = [
        {
                label: 'Select Mission',
                icon: 'pi pi-fw pi-search',
                route: '/select_mission'
        },
        {
                label: 'Map',
                icon: 'pi pi-fw pi-map',
                route: '/map'
        },
        {
                label: 'System Stats',
                icon: 'pi pi-fw pi-chart-bar',
                route: '/system_stats'
        }
]

</script>
