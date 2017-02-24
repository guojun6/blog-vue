<template>
  <section class="barrier">
    <img src="http://nazgulpark.com/img/loader.gif">
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.barrier {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.2);
  z-index: 10000;
}
img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
