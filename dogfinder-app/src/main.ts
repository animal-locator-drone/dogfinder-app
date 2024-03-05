import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeView from 'primevue/config'

import App from './App.vue'
import router from './router'


import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)

app.component('Dropdown', Dropdown);
app.component('Button', Button);

app.use(PrimeView)
app.use(createPinia())
app.use(router)

app.mount('#app')
