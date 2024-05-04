import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Primvue imports
import PrimeVue from 'primevue/config';
import PrimeOne from 'primevue/themes/primeone';
import Aura from 'primevue/themes/primeone/aura';
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice';

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
import VirtualScroller from 'primevue/virtualscroller'
import Galleria from 'primevue/galleria'
import Divider from 'primevue/divider'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import Toolbar from 'primevue/toolbar'
import Image from 'primevue/image'
import Toast from 'primevue/toast';

// FontAwesome components
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
        faBatteryFull,
        faBatteryThreeQuarters,
        faBatteryHalf,
        faBatteryQuarter,
        faBatteryEmpty,
        faClock,
        faMapMarkerAlt,
        faWifiStrong,
        faPlane
} from '@fortawesome/free-solid-svg-icons'


// Leaflet components
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

// PrimeVue CSS
import 'primeicons/primeicons.css';
import "primeflex/primeflex.css";

const app = createApp(App)

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
app.component('VirtualScroller', VirtualScroller);
app.component('Galleria', Galleria);
app.component('Divider', Divider);
app.component('Splitter', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('Toolbar', Toolbar);
app.component('Image', Image);
app.component('Toast', Toast);

// FontAwesome components added to the app
library.add(
        faBatteryFull,
        faBatteryThreeQuarters,
        faBatteryHalf,
        faBatteryQuarter,
        faBatteryEmpty,
        faClock,
        faMapMarkerAlt,
        faWifiStrong,
        faPlane

)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(PrimeVue, {
        // Default theme configuration
        theme: {
                base: PrimeOne,
                preset: Aura,
                options: {
                        prefix: 'p',
                        darkModeSelector: "system",
                        cssLayer: false
                }
        }
});

app.use(ConfirmationService)
app.use(ToastService);
app.use(createPinia())
app.use(router)




app.mount('#app')
