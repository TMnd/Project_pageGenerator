import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "@/assets/style/global.css"
import json from '@/assets/dummyData/data.json'
import authorInformation from '@/assets/dummyData/authorInformation.json'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import pageCreation from "./plugins/pageCreation";
import helpers from "./plugins/helpers";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VJsoneditor from 'v-jsoneditor/src/index'

const toastOptions = {
    // You can set your default options here
};

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = true

Vue.use(VJsoneditor)
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(pageCreation);
Vue.use(helpers);
Vue.use(Toast, toastOptions);

//Global variables
Vue.prototype.$jsonObject = json;
Vue.prototype.$authorInformation = authorInformation;
Vue.prototype.$generatedContent = [];
Vue.prototype.$inputData = {};

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
