import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import * as AuthorizationUser from './userAuthorization'

Vue.use(Vuex)

const userAuthorization = {
  namespaced: true,
  ...AuthorizationUser
}

export default new Store({
  modules: {
    userAuthorization
  }
})
