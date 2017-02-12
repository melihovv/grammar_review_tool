'use strict'

import Vue from 'vue'
import Multiselect from 'vue-multiselect'
import 'bootstrap/dist/js/bootstrap'
import './messenger-setup'
import './ajax-setup'
import App from 'Components/App'
import GrammarView from 'Components/GrammarView'
import RightsManagement from 'Components/RightsManagement'

Vue.component('vue-multiselect', Multiselect)

Vue.component('app', App)
Vue.component('grammar-view', GrammarView)
Vue.component('rights-management', RightsManagement)

/* eslint-disable no-new */
new Vue({
  el: '#app',
})
