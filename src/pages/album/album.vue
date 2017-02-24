<template>
  <article class="album">
    <section v-for="(item, index) of albumList"
             class="album-item"
             :style="{transform: 'rotate('+(Math.random() - 0.5) * 40+'deg)'}"
             @click="SET_ALBUMDATA(item)"
    >
      <router-link :to="'/album/p/'+item.id">
        <h3>{{item.albumName}}</h3>
        <div class="img-wrap">
          <img :src="'http://nazgulpark.com/img/album/thumb/' + item.thumb" />
        </div>
      </router-link>
    </section>
  </article>
</template>

<script>
import { getAlbum } from '../../service/getData'
import { mapMutations } from 'vuex'
import { SET_HEADER_BTN_TYPE, SET_ALBUMDATA } from '../../store/mutations.type'

export default {
  data () {
    return {
      tags: [],
      albumList: [],
      rotateList: []
    }
  },
  async created () {
    this.$emit('barrier', true)
    this.SET_HEADER_BTN_TYPE('aside')
    await this.getAlbumData().catch((e) => alert('请检查您的网络'))
    this.$emit('barrier', false)
  },
  activated () {
    this.SET_HEADER_BTN_TYPE('aside') // keep-alive中只created一次 只有调用这个
  },
  methods: {
    async getAlbumData () {
      let res = await getAlbum()
      console.log(res.data);
      this.albumList = res.data
    },
    ...mapMutations([
      SET_HEADER_BTN_TYPE,
      SET_ALBUMDATA
    ]),
    getRandomNum () {
      return (Math.random() - 0.5) * 30
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/common";
.album {
  padding-top: 16px;
  @at-root {
  .album-item {
    display: inline-block;
    width: REM(250);
    border: REM(16) solid #ccc;
    background: #ccc;
    font-size: 0;
    >a {
      width: 100%;
      height: 100%;
    }
    h3 {
      padding-bottom: 4px;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
    }
    @at-root {
    .img-wrap {
      >img {
        width: 100%;
      }
    }
    }

  }
  }


}
</style>
