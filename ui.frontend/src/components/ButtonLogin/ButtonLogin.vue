<template>
  <button @click="verifyLogin">
    <p>
      {{text}}
    </p>
  </button>
</template>

<script>
// Imports

export default {
  name: 'ButtonLogin',
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
      errorLogin: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    verifyLogin () {
      const email = localStorage.getItem('email')
      const password = localStorage.getItem('password')

      const emailValid = this.checkUserLogin(email)
      const passwordValid = this.checkUserPassword(password)
      const validation = emailValid && passwordValid

      if (validation) {
        const payload = {
          email: email,
          password: password
        }
        this.$store.dispatch('userAuthorization/fetchLogin', payload)

        if (this.$store.state.userAuthorization.isValid) {
          console.log('loguei')
          this.$store.dispatch('userAuthorization/fetchErrors', '')
        } else {
          this.$store.dispatch('userAuthorization/fetchErrors', 'Ops, usuário ou senha inválidos. Tente novamente!')
        }
      } else {
        this.errorLoginCheck()
      }
    },
    checkUserLogin (email) {
      if (email.length) {
        const emailNormalize = email.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        const emailResult = /^[A-Za-z.]+$/.test(emailNormalize)

        this.errorLogin.email = null

        return emailResult
      } else {
        this.errorLogin.email = true
        return false
      }
    },
    checkUserPassword (password) {
      if (password.length) {
        const passwordNumberCheck = /^[0-9]+$/.test(password)
        const passwordLengthCheck = password.length >= 6 && password.length <= 8

        this.errorLogin.password = null

        return passwordNumberCheck && passwordLengthCheck
      } else {
        this.errorLogin.password = true
        return false
      }
    },
    errorLoginCheck () {
      const commit = 'userAuthorization/fetchErrors'
      if (this.errorLogin.email && this.errorLogin.password) {
        this.$store.dispatch(commit, 'Ops, preencha os campos.')
      } else if (this.errorLogin.email) this.$store.dispatch(commit, 'Ops, preencha o campo de email')
      else this.$store.dispatch(commit, 'Ops, preencha o campo password')
    }
  }
}
</script>

<style scoped lang="scss">
button {
  color: white;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  padding: 5px 0;
  margin-top: 5%;
  width: 100%;
  height: 67px;

  &:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #ff2d04 100%, #c13216 0%);
    transition: 0.4ms;
  }
}
</style>
