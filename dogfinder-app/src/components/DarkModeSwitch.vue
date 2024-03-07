<template>
        <!-- Dark mode -->
        <li class="flex">
                <!-- InputSwitch from primevue -->
                <label>Dark Mode </label>
                <i class="pi pi-sun" style="
                                                                margin-right: 0.5rem;
                                                                margin-left: 0.5rem;
                                                                color: #f4a261;"></i>
                <InputSwitch v-model="dark_mode" />
                <i class="pi pi-moon" style="
                                                                margin-left: 0.5rem;
                                                                color: darkblue;"></i>
        </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dark_mode = ref(false)
</script>