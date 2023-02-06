<template>
  <div class="album" ref="albumRef">
    <div class="header">
      <el-row class="header-content">
        <el-col :span=12 class="header-item logo" @click="onLogoClick">WILLLEE·PHOTO</el-col>
        <el-col :span=12 class="header-item about" @click="onContentsClick">CONTENTS</el-col>
      </el-row>
    </div>
    <div class="cover" ref="coverRef">
      <img :src="currentAlbum.itemData[0].links.url" alt="">
      <div class="cover-content">
        <div class="left">
          <div class="cover-title time">📷</div>
          <div class="cover-title time">{{ currentAlbum.idData.intro }}</div>
          <div class="cover-title">{{ currentAlbum.idData.name }}</div>
        </div>
        <div class="right">
          <el-icon>
            <ArrowDown />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="content">
      <viewer>
        <template v-for="item in currentAlbum.itemData ">
          <img :src="toggleImg(item)" alt="">
        </template>
      </viewer>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import useAlbumStore from '@/stores/albumStore/albumStore';
import gsap from 'gsap';
import { storeToRefs } from 'pinia';
import { onMounted, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const albumStore = useAlbumStore()
const { currentAlbum } = storeToRefs(albumStore)



// 动态 路由id
const route = useRoute()
const routeId = route.query.id
albumStore.getAlbumById(routeId)

// 图片原图
const toggleImg = (item) => {
  return item.links.url
  // return item.links.thumbnail_url
}


// 动画
const coverRef = ref()

onMounted(() => {
  nextTick(() => {
    coverRef.value.scrollIntoView(0, 0);
  })

  const tl = gsap.timeline({ duration: 0.75, ease: "power2.out" })
  tl.fromTo('.cover-title', { x: -200 }, { x: 0, stagger: 0.3, })
  tl.fromTo('.right', { y: -10, opacity: 0 }, { y: 10, opacity: 1, repeat: -1, yoyo: true })
})

// 点击logo
const onLogoClick = () => {
  router.push('/')
}

// 点击目录
const onContentsClick = () => {
  router.push('/contents')
}

</script>

<style lang="less" scoped>
.album {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding: 16px;
  color: #fff;

  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 0 16px;
  }

  .header-content {

    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    user-select: none;



    border-bottom: 1px solid rgb(255, 255, 255, .1);
  }

  // .header-border {
  //   // padding-top: 16px;
  //   border-bottom: 1px solid rgb(180, 180, 180);
  // }

  .header-item.logo {
    font-weight: Medium 500;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;

  }

  .header-item.about {
    font-weight: 100;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

  }

  .cover {
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;


    img {


      width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      object-fit: cover;
      filter: brightness(0.8);
    }

    .cover-content {
      // text-align: right;
      position: absolute;
      padding: 32px;
      // left: 10%;
      top: 60%;
      width: 100%;

      display: flex;
      justify-content: space-between;

      .cover-title {
        font-size: 32px;
        font-weight: 800;
        opacity: 0.8;
      }

      .cover-title.time {
        font-size: 16px;
        font-weight: 400;
        opacity: 0.8;
      }

      .right {
        display: flex;
        align-items: center;
        font-size: 32px;
      }
    }
  }

  .content {
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;

    user-select: none;
  }

  .content img {
    width: 100%;
    height: auto;
    margin-bottom: 12px;
  }

  .more {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
