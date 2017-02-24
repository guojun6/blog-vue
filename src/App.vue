<template>
  <div id="app">
    <n-header></n-header>
    <transition name="slide">
      <keep-alive>
        <n-aside v-show="showAside"></n-aside>
      </keep-alive>
    </transition>

    <transition name="fade">
      <keep-alive>
        <router-view class="middle" @barrier="openBarrier"></router-view>
      </keep-alive>
    </transition>
    <n-footer></n-footer>
    <barrier v-if="opened"></barrier>
  </div>
</template>

<script>
import NFooter from 'components/nFooter/nFooter'
import NHeader from 'components/nHeader/nHeader'
import Barrier from 'components/barrier/barrier'
import NAside from 'components/nAside/nAside'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      opened: false
    }
  },
  computed: {
    ...mapState([
      'showAside'
    ])
  },
  methods: {
    openBarrier (p) {
      this.opened = p
    }
  },
  components: {
    NFooter,
    NHeader,
    Barrier,
    NAside
  }
}
</script>

<style lang="scss">
@import "./common/style/base";
@import "./common/style/common";
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  background: url(http://nazgulpark.com/img/background.png) no-repeat center center;
  background-size: REM(600) auto;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
.slide-enter-active, .slide-leave-active {
    transition: transform .4s linear;
}
.slide-enter, .slide-leave-active {
    transform: translate3d(-100%,0,0);
}
.middle {
  position: absolute;
  top: 44px;
  bottom: REM(90);
  overflow: scroll;
  width: 90%;
  padding: 0 5% 14px;
}
</style>
