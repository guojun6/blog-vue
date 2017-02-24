<template>
  <article class="comment-item">
    <section class="left">
      <p class="kidname">{{comment.kidname}}</p>
      <p class="floor">{{comment.floor}}楼</p>
      <p class="date">{{comment.date}}</p>
    </section>
    <section class="right">
      <div class="msg">{{comment.message}}</div>
      <div class="triangle"></div>
    </section>
  </article>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="scss">
@import "../../../common/style/common";
.comment-item {
  display: flex;
  font-size: 0;
  margin-bottom: 16px;
  >.left {
    flex: 0.3;
    text-align: center;
    font-size: 12px;
    @at-root {
      .kidname {
        font-size: 14px;
        font-weight: bold;
      }
      .date {
        color: #777;
      }
    }
  }
  .right {
    flex: 0.7;
    position: relative;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 14px;
    @at-root {
      .msg {
        padding: 10px 0 10px 16px;
        border-radius: 12px;
        background: #48D1CC;
      }
      .triangle {
        position: absolute;
        left: 1px;
        top: 10px;
        border-bottom: 8px solid transparent;
        border-top: 8px solid transparent;
        border-right: 8px solid #48D1CC;
      }
    }
  }
}
</style>
