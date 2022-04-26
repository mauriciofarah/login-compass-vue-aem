import authentication from '@/server/logins.json'

export const state = () => ({
  userLogin: {},
  isValid: false,
  generalErrorMessage: ''
})

export const mutations = {
  setUserLogin (state, payload) {
    state.userLogin = payload
  },
  setIsValid (state, payload) {
    state.isValid = payload
  },
  seetGeneralErrorMessage (state, payload) {
    state.generalErrorMessage = payload
  }
}

export const actions = {
  fetchLogin ({ commit }, payload) {
    const { logins } = authentication
    let login = {}

    if (logins && logins.length) {
      login = logins.find(
        (user) => {
          return user.login === payload.email && user.password.toString() === payload.password
        }
      )
    }

    if (!login) {
      login = {}
      commit('setIsValid', false)
    } else commit('setIsValid', true)

    commit('setUserLogin', login)
  },
  fetchErrors ({ commit }, payload) {
    commit('seetGeneralErrorMessage', payload)
  }
}
