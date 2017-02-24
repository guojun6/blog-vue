<template>
  <article class="big-image" v-show="showBig" @click="close">
    <img :src="url" />
  </article>
</template>

<script>
export default {
  props: ['url', 'showBig'],
  beforeRouteLeave (to, from, next) {
    this.$emit('closeBigImage') // 放在这里的目的是用户按头部的返回也可以触发更改布尔值
    next()
  },
  methods: {
    close () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../common/style/common";
.big-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(7,17,27,0.5);


  >img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-width: REM(540);
    max-height: REM(700);
  }

}
</style>
