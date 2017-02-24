<template>
  <header class="n-header">
    <div v-if="headerBtnType === 'back'" id="btn-back" @click="goBack">&lt;</div>
    <div v-if="headerBtnType === 'aside'" id="btn-aside" @click="SET_SHOWASIDE(true)">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <div class="">搬泥班尼伴你</div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SET_SHOWASIDE } from '../../store/mutations.type'

export default {
  computed: {
    ...mapState([
      'headerBtnType'
    ])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    ...mapMutations([
      SET_SHOWASIDE
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/common";
.n-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background: #1E90FF;
  text-align: center;
  color: #fff;
}
#btn-back, #btn-aside {
  position: absolute;
  top: 0;
  left: 0;
  height: 44;
  width: 1.5em;
  line-height: 44px;
  font-size: 24px;
}
.line {
  display: block;
  width: 70%;
  margin: 3px auto;
  height: 4px;
  background: #fff;
  &:first-child {
    margin-top: 13px;
  }
}
</style>
