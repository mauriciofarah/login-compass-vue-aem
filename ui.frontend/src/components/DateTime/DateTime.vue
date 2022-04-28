<template>
  <div class="">
    <p class="clock">{{ clock }}</p>
    <p class="date">{{ date }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DateTime',
  data () {
    return {
      date: moment().locale('pt-br').format('LLLL').slice(0, -9),
      clock: moment().locale('pt-br').format('LT')
    }
  }
}
</script>

<style scoped lang="scss">
.clock {
  font-family: 'Mark Pro';
  font-weight: 700;
  font-size: 144px;
  text-align: center;
  margin: 0px;
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
