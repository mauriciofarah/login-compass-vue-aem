<template>
  <div class="">
    <span class="clock">{{ clock }}</span>
    <span class="date">{{ date }}</span>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DateTime',
  data () {
    return {
      clock: moment().locale('pt-br').format('LT'),
      date: moment().locale('pt-br').format('LLLL').slice(0, -9)
    }
  },
  mounted () {
    setInterval(() => {
      this.clock = moment().locale('pt-br').format('LT')
    }, 1000)
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  margin-top: -3%;
}
.clock {
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: 144px;
  text-align: center;
}
.date {
  font-family: 'Mark Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  text-align: center;
  margin: 0px;
}
</style>
