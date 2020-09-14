import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuikit)
Vue.use(VuikitIcons)

import './custom.scss'
import '@vuikit/theme'

new Vue({
  render: h => h(App),
}).$mount('#app')
