import axios from 'axios'

// 获取文章列表信息
export const getArticle = () => {
  return axios.get('/php/article.php')
}
// 获取标签信息
export const getTag = () => {
  return axios.get('/php/tag.php')
}
// 获取所属标签的文章信息
export const getTagArticle = (tag) => {
  let pro = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = http
    xhr.open('post', '/php/article-tag.php', true)
    xhr.setRequestHeader('Content-TYpe', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send('tag=' + tag);
    function http () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      }
    }
  })

  return pro
}
// 获取单篇文章信息
export const getArticleDetail = (paramValue) => {
  let pro = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = http
    xhr.open('post', '/php/article-detail.php', true)
    xhr.setRequestHeader('Content-TYpe', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send('paramValue=' + paramValue);
    function http () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      }
    }
  })

  return pro
}
// 获取文章内容
export const getArticleContent = (file) => {
  return axios.get('/article/detail/text/' + file)
}
// 获取单篇文章信息
export const getSingleArticle = (paramValue) => {
  let pro = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = http
    xhr.open('post', '/php/single-article.php', true)
    xhr.setRequestHeader('Content-TYpe', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send('fid=' + paramValue);
    function http () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      }
    }
  })

  return pro
}

// 获取相册列表信息
export const getAlbum = () => {
  return axios.get('/php/album.php')
}
// 获取单个相册信息
export const getSingleAlbum = (paramValue) => {
  let pro = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = http
    xhr.open('post', '/php/single-album.php', true)
    xhr.setRequestHeader('Content-TYpe', 'application/x-www-form-urlencoded; charset=UTF-8')
    xhr.send('pid=' + paramValue);
    function http () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.response))
      }
    }
  })

  return pro
}

// 获取评论信息
export const getComment = () => {
  return axios.get('/php/comments.php')
}

// 送花
export const giveFlower = () => {
  return axios.get('/php/flower.php')
}
