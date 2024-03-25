<template>
        <i class="pi pi-fw pi-globe"></i>
        Language
        <Dropdown :options="languages"
                optionLabel="name"
                v-model="selected_language"
                placeholder="Select a Language" 
                />
</template>



<script setup lang="ts">
import { ref } from 'vue'

const selected_language = ref()

const languages = [
        { name: 'English', value: 'en' },
        { name: 'Spanish', value: 'es' },
        { name: 'French', value: 'fr' },
        { name: 'German', value: 'de' },
        { name: 'Mandarin', value: 'Zh' },
        { name: 'Pig Latin', value: 'pg' }

]

</script>

