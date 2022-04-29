<template>
  <div class="container-input">
    <div class="container-input__user-icon">
      <img src="/content/dam/vue/user.png" />
    </div>
    <input
      type="text"
      class="container-input__input-field"
      value
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
// Imports

export default {
  name: 'InputHome',
  props: {
    placeholder: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.container-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 61px;

  border-right: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;

  &__input-field {
    padding: 16px 16px;
    background: transparent;
    width: 453px;
    height: 45px;

    border: 1px solid #FFFFFF;
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

  &__user-icon {
    width: 20px;
    height: 20px;
    position: relative;
    left: 40px;
  }
}

::-webkit-input-placeholder {
   text-align: center;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
  -webkit-transition-delay: 9999s;
}
</style>
