<template>
  <div>
    <p>
        {{ this.$store.state.userAuthorization.generalErrorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage'
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: center;
    margin-top: -5%;
    p {
        font-family: 'Mark Pro';
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #e9b425;
        transition: all ease-in-out 0.5s;
        width: 283px;
        height: 40px;
    }
}
</style>
