<template>
        <div class="card flex justify-content-center">
                <Button icon="pi pi-bars" @click="visible = !visible" :style="{ position: 'absolute', top: '0rem', left: '0rem' }" />
                <div style="position: relative;">

                        
                        <Sidebar v-model:visible="visible" :showCloseIcon="false">
                                <template #header>
                                        <h2>Dog Finder App</h2>
                                </template>
                                <Button icon="pi pi-bars" @click="visible = !visible" :style="{ position: 'absolute', top: '0rem', right: '0rem' }" />
                                <!-- Settings items -->
                                <ul class="p-0 m-0">
                                        <!-- Dark mode -->
                                        <li class="flex items" >
                                                <!-- InputSwitch from primevue -->
                                                <label>Dark Mode </label>
                                                <i class="pi pi-sun" 
                                                        style="
                                                                margin-right: 0.5rem;
                                                                margin-left: 0.5rem;
                                                                color: #f4a261;"
                                                        ></i>
                                                <InputSwitch v-model="dark_mode"/>
                                                <i class="pi pi-moon"
                                                        style="
                                                                margin-left: 0.5rem;
                                                                color: darkblue;"
                                                        ></i>
                                        </li>
                                </ul>
                        </Sidebar>
                </div>

        </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'


const visible = ref(false)
const dark_mode = ref(false)


</script>
