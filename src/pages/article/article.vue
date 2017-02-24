<template>
  <article class="article">
    <div class="top">
      <h6 class="">标签</h6>
      <ul v-if="tags.length" class="tag-wrap">
        <li class="tag" @click="changeArticleType('all')">全部</li>
        <li v-for="(item, index) of tags" class="tag" @click="changeArticleType(item)">
          {{item}}
        </li>
      </ul>
    </div>

    <article-list v-if="articleList.length" :article-list="articleList"></article-list>
  </article>
</template>

<script>
import { getArticle, getTag, getTagArticle } from '../../service/getData'
import ArticleList from './children/articleList'
import { mapMutations } from 'vuex'
import { SET_HEADER_BTN_TYPE } from '../../store/mutations.type'

export default {
  data () {
    return {
      tags: [],
      articleList: []
    }
  },
  async created () {
    this.$emit('barrier', true)
    this.SET_HEADER_BTN_TYPE('aside')
    await Promise.all([
      this.getArticleData(),
      this.getTagData()
    ]).catch((e) => alert('请检查您的网络'))
    this.$emit('barrier', false)
  },
  activated () {
    this.SET_HEADER_BTN_TYPE('aside') // keep-alive中只created一次 只有调用这个
  },
  methods: {
    async getArticleData () {
      let res = await getArticle()
      this.articleList = res.data
    },
    getTagData () {
      getTag().then((res) => {
        this.tags = [...new Set(res.data)]
      })
    },

    async changeArticleType (tag) {
      this.$emit('barrier', true)
      let res = await getTagArticle(tag).catch((e) => alert('请检查您的网络'))
      this.articleList = res
      this.$emit('barrier', false)
    },
    ...mapMutations([
      SET_HEADER_BTN_TYPE
    ])
  },
  components: {
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/common";
.article {
  &::before {
    content: ' ';
    display: table;
  }

  .top {
    margin-top: 10px;
    margin-bottom: 10px;
    >h6 {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
    >.tag-wrap {
      font-size: 0;

      >.tag {
        display: inline-block;
        font-size: 14px;
        padding: 3px 6px;
        margin: 4px;
        background: #76dcee;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

}
</style>
