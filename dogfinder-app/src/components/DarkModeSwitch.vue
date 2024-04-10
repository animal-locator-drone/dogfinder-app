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




var dark_mode = ref(true)

function changeTheme(   ) {

        //Checks to see if dark_mode is true
        //if it is change the value
        if (dark_mode.value == true ) {
                alert( dark_mode.value )


                //insert code here to change the theme
        }// end if 

        //Checks to see if dark_mode is false
        else if( dark_mode.value == false ) {
                alert( dark_mode.value )
                //insert code to change the theme here lol 
                
        }// end if 

} 




</script>