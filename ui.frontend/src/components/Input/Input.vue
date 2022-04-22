<template>
  <div>
    <input :type="type" class="input-field" value :placeholder="placeholder" />
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
      iconClass: ''
    }
  },
  updated () {
    if (this.type === 'text') {
      this.icon = '/content/dam/vue/user.png'
      this.iconClass = 'user-icon'
    } else {
      this.icon = '/content/dam/vue/lock.png'
      this.iconClass = 'lock-icon'
    }
  }
}
</script>

<style scoped>
.input-field {
  padding: 16px 16px;
  background: transparent;
  width: 379px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50px;
  margin-bottom: 5%;

  font-family: "Mark Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #e0e0e0;
}

.user-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-left: -6%;
}

.lock-icon {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 25.1px;
  margin-left: -6%;
}
</style>
