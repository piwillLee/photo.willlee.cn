<template>
  <div class="about">
    <h2></h2>

    <div class="text">
      “You don't make a photograph just with a camera.
      You bring to the act of photography all the pictures you have
      seen,the books you have read,the music you have heard,the people you have loved.” <small>― Ansel Adams</small>
    </div>
    <div class="text">
      我们不只是用相机拍照。我们带到摄影中去的是所有我们读过的书，看过的电影，听过的音乐，爱过的人。 <small>― 安塞尔·亚当斯 </small>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.about {
  display: flex;
  width: 100%;
  height: calc(100vh - 7.25rem);

  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  .text {
    max-width: 75rem;
    margin-top: 16px;
  }
}
</style>
