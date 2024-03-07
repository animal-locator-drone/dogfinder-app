import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeView from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'


import App from './App.vue'
import router from './router'

// PrimeVue components
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu'
import InputSwitch from 'primevue/inputswitch';
import Menu from 'primevue/menu';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import ConfirmDialog from 'primevue/confirmdialog'
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card'

import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

// PrimeVue CSS
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";



// Vuetify Components
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const app = createApp(App)

const vuetify = createVuetify({
        components,
        directives,
        icons: {
                defaultSet: 'mdi',
                aliases,
                sets: {
                        mdi
                },
        },
})

// PrimeVue components added to the app
app.component('Dropdown', Dropdown);
app.component('Button', Button);
app.component('Sidebar', Sidebar);
app.component('PanelMenu', PanelMenu);
app.component('InputSwitch', InputSwitch);
app.component('Menu', Menu);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('ConfirmDialog', ConfirmDialog);
app.component('Panel', Panel);
app.component('Dialog', Dialog);
app.component('LMap', LMap);
app.component('LTileLayer', LTileLayer);
app.component('Card', Card);

app.use(vuetify)
app.use(PrimeView)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)

app.mount('#app')
