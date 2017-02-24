<template>
  <article class="album-dt">
    <section v-for="(item, index) of photosArray" class="photo-item" @click="seeBigPhoto(item)">
      <router-link :to="$route.path+'/b/'+index">
        <img :src="albumData.foldPath+'/thumbs/'+item" >
      </router-link>
    </section>
    <router-view :url="bigPhotoUrl"
                 :show-big="showBig"
                 @closeBigImage="toggleShowBig"
                 ></router-view>
  </article>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SET_HEADER_BTN_TYPE, SET_ALBUMDATA } from '../../store/mutations.type'
import { getSingleAlbum } from '../../service/getData'
export default {
  data () {
    return {
      photosArray: [],
      bigPhotoUrl: '',
      showBig: false
    }
  },
  computed: {
    ...mapState([
      'albumData'
    ])
  },
  watch: {
    async articleData (to, from) {
      // let res = await getArticleContent(this.articleData.foldPath)
      // this.htmlText = res.data
    },
    albumData () {
      let arr = this.albumData.photosArray.split(';;')
      this.photosArray = arr
    }
  },
  async created () {
    this.SET_HEADER_BTN_TYPE('back')
    if (!this.albumData) { // 在文章详情页中刷新，vuex中数据为原始状态，需要根据路由设置vuex
      this.$emit('barrier', true)
      let res = await getSingleAlbum(this.$route.params.pid)
      this.SET_ALBUMDATA(res[0])
      this.$emit('barrier', false)
    }
  },
  activated () {
    this.SET_HEADER_BTN_TYPE('back') // keep-alive中只created一次 只有调用这个
  },
  methods: {
    seeBigPhoto (file) {
      this.bigPhotoUrl = this.albumData.foldPath + '/' + file
      this.toggleShowBig()
    },
    toggleShowBig () {
      this.showBig = !this.showBig
    },
    ...mapMutations([
      SET_HEADER_BTN_TYPE,
      SET_ALBUMDATA
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/common";
.album-dt {
  padding-top: 10px;
  @at-root {
    .photo-item {
      position: relative;
      display: inline-table;
      margin: REM(16) REM(30);
      width: REM(220);
      height: REM(220);
      box-shadow: 2px 2px 8px 2px rgba(7,17,27,0.3);
      background: rgba(20,20,20,0.1);
      >a {
        display: table-cell;
        min-width: 100%;
        height: 100%;
        vertical-align: middle;
        text-align: center;
          img {
            display: inline-block;
            max-width: 100%;
            max-height: REM(220);
            vertical-align: middle;
          }
      }
    }
  }
}
</style>
