<template>
        
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
import PrimeVue from 'primevue/config';
import { usePrimeVue } from 'primevue/config';





var dark_mode = ref(true)

function changeTheme(   ) {

        const PrimeVue = usePrimeVue();

        //Checks to see if dark_mode is true
        //if it is change the value
        if (dark_mode.value == true ) {
                alert( dark_mode.value )
                PrimeVue.changeTheme('md-dark-pink', 'md-light-blue', 'theme-link', () => {});


                //insert code here to change the theme
        }// end if 

        //Checks to see if dark_mode is false
        else if( dark_mode.value == false ) {
                alert( dark_mode.value )
                //insert code to change the theme here lol 
                PrimeVue.changeTheme('md-light-blue', 'md-dark-pink', 'theme-link', () => {});
        }// end if 

} 




</script>