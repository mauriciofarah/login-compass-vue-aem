<template>
  <div class="container-input">
    <input
      :type="type"
      class="input-field"
      value
      :placeholder="placeholder"
      @change="save"
      v-model="form[loginData]"
    />
    <div :class="iconClass">
      <img :src="icon" />
    </div>
  </div>
</template>

<script>
// Imports

export default {
  name: 'InputLogin',
  props: {
    type: {
      type: String
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      icon: '',
      iconClass: '',
      loginData: 'email',
      form: {
        [this.loginData]: ''
      }
    }
  },
  updated () {
    // Set initial information of input
    if (this.type === 'text') {
      this.icon = '/content/dam/vue/user.png'
      this.iconClass = 'user-icon'
      this.loginData = 'email'
    } else {
      this.icon = '/content/dam/vue/lock.png'
      this.iconClass = 'lock-icon'
      this.loginData = 'password'
    }
  },
  methods: {
    // Function to save information on localStorage
    save () {
      localStorage.setItem(this.loginData, this.form[this.loginData])
    }
  }
}
</script>

<style scoped lang="scss">
.container-input {
  display: flex;
  align-items: center;
  margin-bottom: 10%;
  position: relative;
}
.input-field {
  padding: 16px 16px;
  background: transparent;
  height: 60px;
  width: 100%;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;
  outline: none;

  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #e0e0e0;

  &:focus::placeholder {
    color: transparent;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
  -webkit-transition-delay: 9999s;
}

.user-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
}

.lock-icon {
  width: 20px;
  height: 25.1px;
  position: absolute;
  right: 20px;
}
</style>
