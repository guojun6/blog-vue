<template>
  <section id="aside-wrap" @click.self="SET_SHOWASIDE(false)">
    <article class="aside">
      <section class="info">
        <div class="avater">
          <img src="http://nazgulpark.com/img/index/head-pc.jpg">
        </div>
        <h1>黄国俊</h1>
        <p>目前就读于广东工业大学</p>
      </section>
      <section class="personal-act">
        <div class="flower" @click.once="giveFlower" ref="flower">
          <div class="icon" :class="{active: flowered}"></div>
          <div class="">送花给我</div>
          <div class="add-one" v-show="flowered">+1</div>
        </div>
        <div class="weibo">
          <div class="icon"></div>
          <div class=""><a href="http://weibo.com/u/5768460580?topnav=1&wvr=6&topsug=1&is_hot=1">新浪微博</a></div>
        </div>
      </section>
    </article>
  </section>
</template>

<script>
import { giveFlower } from '../../service/getData'
import { mapMutations } from 'vuex'
import { SET_SHOWASIDE } from '../../store/mutations.type'

export default {
  data () {
    return {
      flowered: false
    }
  },
  methods: {
    async giveFlower () {
      let res = await giveFlower()
      this.flowered = true
      console.log(res.data);
    },
    ...mapMutations([
      SET_SHOWASIDE
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/common";
#aside-wrap {
  position: absolute;
  z-index: 10001;
  height: 100%;
  width: 100%;
}
.aside {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 140px;
  padding: 0 10px;
  text-align: center;
  background: #1E90FF; //#3E40FF
  box-shadow: 7px 1px 8px 1px rgba(0,0,0,0.4);
  color: #fff;
  a {
    color: #fff;
  }
  @at-root {
    .info {
      margin: 30px auto;
      .avater {
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
        >img {
          width: 100%;
        }
      }
      >h1 {
        margin: 10px;
        font-size: 18px;
        font-weight: bold;
      }
      >p {
        font-size: 14px;
      }
    }
    .personal-act {
      font-size: 0;
      >div {
        position: relative;
        margin-top: 10px;
        >.add-one {
          position: absolute;
          top: -20px;
          left: 50%;
          margin-left: -8px;
          font-size: 12px;
          font-weight: bold;
          color: #ff0000;
        }
        &.flower>.icon {
          background: url(http://nazgulpark.com/img/index/flower.png) no-repeat left center;
          background-size: 56px 28px;
          transition: background-position-x 0.8s ease;
          &.active {
            background-position-x: right;
          }
        }
        &.weibo>.icon {
          background: url(http://nazgulpark.com/img/index/weibo.png) no-repeat left center;
          background-size: 28px 28px;
        }
        >div {
          display: inline-block;
          font-size: 14px;
          line-height: 2;
          &.icon {
            width: 28px;
            height: 28px;
            margin-right: 4px;
          }
        }
      }
    }
  }
}
</style>
