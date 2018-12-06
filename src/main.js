// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)

Vue.prototype.$loading = Element.Loading.service
Vue.prototype.$msgbox = Element.MessageBox
Vue.prototype.$alert = Element.MessageBox.alert
Vue.prototype.$confirm = Element.MessageBox.confirm
Vue.prototype.$prompt = Element.MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Element.Message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
