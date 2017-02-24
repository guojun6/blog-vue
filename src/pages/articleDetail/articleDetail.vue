<template>
  <article class="article-dt" v-html="htmlText">
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SET_HEADER_BTN_TYPE, SET_ARTICLEDATA } from '../../store/mutations.type'
import { getArticleContent, getSingleArticle } from '../../service/getData'
export default {
  data () {
    return {
      htmlText: ''
    }
  },
  computed: {
    ...mapState([
      'articleData'
    ])
  },
  watch: {
    async articleData (to, from) {
      let res = await getArticleContent(this.articleData.foldPath)
      this.htmlText = res.data
    }
  },
  async created () {
    this.SET_HEADER_BTN_TYPE('back')
    if (!this.articleData) { // 在文章详情页中刷新，vuex中数据为原始状态，需要根据路由设置vuex
      let res = await getSingleArticle(this.$route.params.aid)
      this.SET_ARTICLEDATA(res[0])
    }
  },
  activated () {
    this.SET_HEADER_BTN_TYPE('back') // keep-alive中只created一次 只有调用这个
  },
  methods: {
    ...mapMutations([
      SET_HEADER_BTN_TYPE,
      SET_ARTICLEDATA
    ])
  }
}
</script>

<style lang="scss">
@import "../../common/style/common";

.text-title {
	font-size: 18px;
	text-align: center;
}

.text-time {
	font-size: 12px;
	color: #999;
	text-align: center;
}
.text-p {
	font-size: 16px;
	line-height: 1.5;
	color: #000;
	white-space: pre-wrap;
  vertical-align: baseline;
}
.text-pre {
	white-space: pre;
}
.text-code {
	width:86%;
	margin: 20px auto;
	padding: 5px 16px 16px;
	border: 1px solid #ccc;
	border-radius: 6px;
	font-size: 12px;
	line-height: 1.5;
	background: #eee;
	white-space: pre-wrap;
}
.text-code-note {
	color: #800;
}
.text-a,.text-a:link,.text-a:visited,.text-a:hover,.text-a:active {
	color: deepskyblue;
}
.text-bold {
	font-weight: bold;
}

.text-big-pic {
	margin: auto;
	width: 80%;
}
.text-big-pic img {
	width: 100%;
}

.text-pig-center {
	text-align: center;
}

#content-box {
	background: #fff;
}
.article-text-box {
	padding-top: 20px;
}
.article-path {
	padding: 0.8em;
	background: #478cb5;
}
.recommand-article h3 {
	font-size: 18px;
	padding: 10px;
}
.recommand-article li {
	padding: 8px 10px;
}
.recommand-article a {
	color: blue;
}

</style>
