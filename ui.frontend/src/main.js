import store from '@/store/index.js'
import { AuthoringUtils, ModelManager } from '@adobe/aem-spa-page-model-manager'
import { Constants } from '@mavice/aem-vue-editable-components'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import './map-components'
Vue.use(VueRouter)
document.addEventListener('DOMContentLoaded', () => {
  ModelManager.initialize().then(pageModel => {
    new Vue({
      store,
      router: new VueRouter({
        mode: 'history',
        routes: []
      }),
      render (createElement) {
        return createElement(App, {
          props: {
            cqChildren: pageModel[Constants.CHILDREN_PROP],
            cqItems: pageModel[Constants.ITEMS_PROP],
            cqItemsOrder: pageModel[Constants.ITEMS_ORDER_PROP],
            cqPath: pageModel[Constants.PATH_PROP],
            isInEditor: AuthoringUtils.isInEditor(),
            locationPathname: window.location.pathname,
            injectPropsOnInit: true
          }
        })
      }
    }).$mount('#spa-root')
  })
})
// # sourceMappingURL=main.js.map
