<template>
        <!-- Settings items -->
        <ul class="list-none p-0 m-0">
                <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <DarkModeSwitch />
                </li>
                <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <LanguageSelector />
                </li>
        </ul>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import DarkModeSwitch from '@/components/DarkModeSwitch.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

</script>

<style scoped>
.hamburger-menu {
        position: absolute;
        top: 1rem;
        left: -0.5rem;
}
</style>
