<template>
  <ul class="article-list">
    <li v-for="(item, index) of articleList" @click="SET_ARTICLEDATA(item)">
      <router-link :to="'/article/a/'+item.id">
        <article class="a-item">
          <div class="tag">
            {{item.tag}}
          </div>
          <div class="left">
            <h3>{{item.title}}</h3>
            <p class="summary">{{item.summary}}</p>
            <p class="time">{{item.time}}</p>
          </div>
          <div class="right">
            <img :src="'http://nazgulpark.com/img/article/'+item.imageThumb" >
          </div>

        </article>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'
import { SET_ARTICLEDATA } from '../../../store/mutations.type'
export default {
  props: {
    articleList: {
      type: Array
      /* default属性在父组件有传参数过来的时候无用，不管传过来的是否为数组 */
    }
  },
  methods: {
    gotoDetail (data) {
    },
    ...mapMutations([
      SET_ARTICLEDATA
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../../../common/style/common";
.article-list {
  >li {
    border-top: 1px solid rgba(7,17,27,0.4);
    &:last-child {
      border-bottom: 1px solid rgba(7,17,27,0.4);
    }
    >a {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
}
.a-item {
  position: relative;
  padding: 1.5em 0;
  .left {
    display: table-cell;
    padding-right: 6px;
    width: 60%;
    vertical-align: middle;
    >h3 {
      padding-top: 4px;
      font-size: 14px;
      font-weight: bold;
      color: #000;
      white-space: normal;
    }
    >.summary {
      white-space: normal;
    }
    .time {
      padding-top: 6px;
      color: #999;
    }
  }
  .right {
    position: relative;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    >img {
      max-width: 100%;
      //max-height: 120px;
      vertical-align: middle;;;
    }
  }
}
.tag {
  position: absolute;
  left: 1em;
  top: -0.5em;
  padding: 0 4px;
  line-height: 2;
  background: #76dcee;
}
</style>
