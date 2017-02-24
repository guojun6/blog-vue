<template>
  <article class="comment">
    <ul>
      <li v-for="(item, index) of commentsList" v-if="index < nowPage*maxInPage && index >= (nowPage-1)*maxInPage">
        <comments-item :comment="item"></comments-item>
      </li>
    </ul>
    <div class="pages-wrap">
      <ul>
        <li id="prev" @click="gotoPage(nowPage-1)">上一页</li>
        <li v-for="(item, index) of pageAcount"
          :class="{active: index+1 === nowPage}"
          @click="gotoPage(index+1)">{{index+1}}</li>
        <li id="next" @click="gotoPage(nowPage+1)">下一页</li>
      </ul>
    </div>
  </article>
</template>

<script>
import { getComment } from '../../service/getData' // 评论没有与其他组件交流所以不放在vuex
import CommentsItem from './children/commontItem'
export default {
  data () {
    return {
      maxInPage: 7, // 一页最多多少评论
      nowPage: 1, // 当前页数,
      commentsList: []
    }
  },
  computed: {
    pageAcount () { // 页数
      return Math.ceil(this.commentsList.length / this.maxInPage)
    }
  },
  async created () {
    this.$emit('barrier', true)
    let res = await getComment()
    let showList = res.data
    showList = showList.filter((item) => item.delete === '0')
    this.commentsList = showList
    this.$emit('barrier', false)
  },
  methods: {
    gotoPage (index) {
      if (index < 1) {
        index = this.pageAcount
      } else if (index > this.pageAcount) {
        index = 1
      }
      this.nowPage = index
    }
  },
  components: {
    CommentsItem
  }
}
</script>

<style lang="scss">
@import "../../common/style/common";

.comment {
  padding-top: 10px;
  font-size: 0;
  @at-root {
    .pages-wrap {
      text-align: center;
      >ul {
        display: inline-block;
        >li {
          display: inline-block;
          margin: 0 4px;
          font-size: 14px;
          line-height: 2;
          padding: 0 8px;
          background: #D2B48C;
          color: #fff;
          &.active {
            background: #1E90FF;
          }
        }
      }
    }
  }
}
</style>
