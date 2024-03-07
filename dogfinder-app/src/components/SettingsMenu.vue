<template>
        <div class="card flex justify-content-center">
                <Button icon="pi pi-bars" @click="visible = !visible"
                        :style="{ position: 'absolute', top: '0rem', left: '0rem' }" />
                <div style="position: relative;">


                        <Sidebar v-model:visible="visible" :showCloseIcon="false">
                                <template #header>
                                        <h2>App Settings</h2>
                                </template>
                                <Button icon="pi pi-bars" @click="visible = !visible"
                                        :style="{ position: 'absolute', top: '0rem', right: '0rem' }" />
                                <!-- Settings items -->
                                <ul class="list-none p-0 m-0">
                                        <li
                                                class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                                                <DarkModeSwitch />
                                        </li>
                                        <li
                                                class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                                                <LanguageSelector />
                                        </li>
                                </ul>

                        </Sidebar>
                </div>

        </div>
</template>

        <script setup lang="ts">
        import { ref } from 'vue'
        import DarkModeSwitch from '@/components/DarkModeSwitch.vue'
        import LanguageSelector from '@/components/LanguageSelector.vue'

        const visible = ref(false)

</script>
