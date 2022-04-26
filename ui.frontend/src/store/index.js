import logins from '@/server/logins.json'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

console.log(logins)

const authorization = {
  isValid: false
}

export default new Store({
  modules: {
    authorization
  }
})
