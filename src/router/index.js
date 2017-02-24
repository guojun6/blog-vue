import Vue from 'vue'
import Router from 'vue-router'
import Article from '../pages/article/article'
import ArticleDetail from '../pages/articleDetail/articleDetail'
import Album from '../pages/album/album'
import AlbumDetail from '../pages/albumDetail/albumDetail'
import BigImage from '../pages/albumDetail/children/bigImage'
import Comment from '../pages/comment/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/article'
    }, {
      path: '/article',
      component: Article
    }, {
      path: '/article/a/:aid',
      component: ArticleDetail
    }, {
      path: '/album',
      component: Album
    }, {
      path: '/album/p/:pid',
      component: AlbumDetail,
      children: [
        {
          path: 'b/:bid',
          component: BigImage
        }
      ]
    }, {
      path: '/comment/:pageNum',
      component: Comment
    }
  ],
  linkActiveClass: 'active'
})
