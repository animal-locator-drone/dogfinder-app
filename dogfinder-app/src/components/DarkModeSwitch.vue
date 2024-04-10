<template>
        <!--import 'primevue/resources/themes/saga-blue/theme.css'; -->
        <!--import 'primevue/resources/themes/md-dark-indigo/theme.css' -->
        <!--primevue.changeTheme(currentTheme: , newTheme: string, linkElementId: string, callback: Function) -->

        <!-- Dark mode -->
        <li class="flex">
                <!-- InputSwitch from primevue -->
                <label>Dark Mode </label>
                <i class="pi pi-sun" style="
                                                                margin-right: 0.5rem;
                                                                margin-left: 0.5rem;
                                                                color: #f4a261;"></i>
                <InputSwitch v-model="dark_mode" @change="changeTheme" />
                

                <i class="pi pi-moon" style="
                                                                margin-left: 0.5rem;
                                                                color: darkblue;"></i>

                
        </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'




var dark_mode = ref(false)

function changeTheme(   ) {
        alert("hello :D")

        //causes button to not move anymore 
        //dark_mode.value = !dark_mode
} 




</script>