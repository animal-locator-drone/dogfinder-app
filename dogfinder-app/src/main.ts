import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeView from 'primevue/config'

import App from './App.vue'
import router from './router'


import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu'


import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

const app = createApp(App)

app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('Sidebar', Sidebar);
app.component('PanelMenu', PanelMenu);

app.use(PrimeView)
app.use(createPinia())
app.use(router)

app.mount('#app')
