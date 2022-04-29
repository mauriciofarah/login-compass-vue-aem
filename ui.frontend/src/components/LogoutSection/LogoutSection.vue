<template>
  <div class="count-container">
    <span class="count-container__refresh-text">
        {{ text }}
    </span>
    <div class="count-container__countdown">
        <span class="count-container__seconds">{{ countDown }}</span>
        <span class="count-container__measurement">{{ measurement }}</span>
    </div>
    <div class="count-container__logon-card">
        <button class="count-container__keep-login" @click="keepLogin">
            Continuar Navegando
        </button>
        <button class="count-container__logout">
            Logout
        </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LogoutSection',
  props: {
    text: {
      type: String
    },
    seconds: {
      type: Number,
      default: 180
    },
    measurement: {
      type: String,
      default: 'seconds'
    }
  },
  data () {
    return {
      countDown: this.seconds,
      initialInterval: () => {}
    }
  },
  mounted () {
    this.runSetInterVal()
  },
  methods: {
    keepLogin () {
      this.countDown = this.seconds
      clearInterval(this.initialInterval)
      this.runSetInterVal()
    },
    runSetInterVal () {
      this.initialInterval = setInterval(() => {
        if (this.countDown > 0) this.countDown--
        else {
          clearInterval(this.initialInterval)
          console.log('fui pro login')
        }
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.count-container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    &__refresh-text {
        font-family: 'Mark Pro';
        width: 109px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-align: right;
        color: #FFFFFF;
    }

    &__countdown {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__seconds {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        color: #FFFFFF;
    }

    &__measurement {
        font-family: 'Mark Pro';
        font-style: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
    }

    &__logon-card {
        display: inherit;
        height: 100%;
    }

    &__keep-login {
        width: 131px;
        height: 100%;
        background: #FFFFFF;

        font-family: 'Mark Pro';
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;

        color: #C13216;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    &__logout {
        width: 131px;
        height: 100%;
        background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

        font-family: 'Mark Pro';
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        text-align: center;

        color: #FFFFFF;
        border: none;

        &:hover {
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 768px) {
      &__seconds,
      &__measurement,
      &__refresh-text {
          display: none;
        }
    }
}
</style>
