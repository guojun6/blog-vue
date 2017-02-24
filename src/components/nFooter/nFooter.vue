<template>
  <nav class="footer">
    <router-link to="/article" tag="section" class="nav-item">
      <a>文章库</a>
    </router-link>
    <router-link to="/album" tag="section" class="nav-item">
      <a>图片墙</a>
    </router-link>
    <router-link to="/comment/1" tag="section" class="nav-item">
      <a>留言板</a>
    </router-link>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../../common/style/common";
.footer {
  position: fixed;
  display: flex;
  height: REM(90);
  width: 100%;
  bottom: 0;
  box-shadow: 1px 0 10px 0px #aaa;
  background: #e4e4e4;
  z-index: 9999;
  >.nav-item {
    flex: 1;
    font-size: 16px;
    line-height: REM(100);
    text-align: center;
    &.active {
      background: #1E90FF;
      >a {
        color: #f5f5f5;
      }
    }
    >a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
