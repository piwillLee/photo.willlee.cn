<template>
  <div class="home">
    <div class="bg"></div>
    <div class="content">

      <div class="top">
        <div class="logo side">

        </div>
        <div class="contents hover-cursor side" @click="handleContentsClick">
          CONTENTS
        </div>
      </div>
      <div class="bottom ">
        <div class="copyRight side">
          COPYRIGHT © WILLLEE·2022~2023 <a class="text" href="https://beian.miit.gov.cn/"
            target="_blank">皖ICP备2023000840号</a>
        </div>
        <div class="about hover-cursor side" @click="handleAboutClick">
          ABOUT
        </div>
      </div>
      <div class="center">
        <div class="text">
          <h1 class="letters">
            WILLLEE
          </h1>
          <h1 class="letters">
            PHOT©
          </h1>
        </div>
        <div class="more hover-cursor" @click="onMoreClick">
          <span class="view">VIEW CONTENTS</span>
          <el-icon class="bottomLeft">
            <BottomLeft />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="img">

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import gsap from "gsap";
import { storeToRefs } from 'pinia';
import { localCache } from '@/utils/cache';
import useAlbumStore from "@/stores/albumStore/albumStore";
import { getAlbum } from "@/service/album/album";
import useMainStore from "@/stores/mainStore/mainStore";

const albumStore = useAlbumStore()
const { albumTotal, albumItemsList } = storeToRefs(albumStore)


// 本地保存
const albumItemsListCache = localCache.getCache('albumTotal')

if (albumItemsListCache == 0) {
  albumStore.getAlbumAction()
} else {
  // 本地有缓存时，十分钟后 或者albumTotal发生变化时重新发送请求
  const total = ref(0)
  getAlbum().then(res => {
    total.value = res.data.total
    const secondGetTime = new Date().getTime()
    const time = secondGetTime - localCache.getCache('firstGetTime') > 10 * 60 * 1000
    if (time || albumTotal.value != total.value) {
      localCache.clear()
      albumStore.getAlbumAction()
    }
  })
}
onMounted(() => {
  const tl = gsap.timeline({ duration: 1, ease: "power1.out" })

  tl.fromTo('.letters', { scale: 0 }, { scale: 1, stagger: 0.9, ease: "back.out(1.7)" })
    .fromTo('.img', { x: '200%', autoAlpha: 0 }, { x: 0, autoAlpha: 1 })
    .fromTo('.side', { x: 0, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.5 })
    .fromTo('.view', { x: 0, autoAlpha: 0 }, { x: 10, autoAlpha: 1 })
    .fromTo('.bottomLeft', { x: 10, y: 0, opacity: 0 }, { y: -5, opacity: 1, duration: 0.75, yoyo: true, repeat: -1 })
    .fromTo('.img', { backgroundSize: '120%' }, { backgroundSize: '100%', duration: 20, yoyo: true, repeat: -1 })
})

const mainStore = useMainStore()
mainStore.handleIsHomePage()
const router = useRouter()
const onMoreClick = () => {
  router.push('/contents')
}

function handleContentsClick() {
  router.push('/contents')
}
function handleAboutClick() {
  router.push('/about')
}

</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  position: fixed;
  // background-color: var(--el-bg-color);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  position: relative;
  z-index: 999;

  display: flex;
  user-select: none;


  background: url(https://tbed.willlee.cn/thumbnails/277a8000eddc0f8257495e2e1b1531bf.png);
  background-size: cover;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(100px);
  }

  .content {

    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    position: relative;





    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .logo {
        width: 32px;
        height: 32px;

        background: url(@/assets/img/favicon.ico);
        background-size: contain;
      }
    }

    .bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      opacity: 0.5 !important;

      a {
        color: var(--el-text-color);
      }

    }

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .text {
        font-size: 52px;

        h1 {
          font-weight: 300;
          margin-right: 100px;
        }

        h1:nth-child(2) {
          font-weight: 300;
          margin-left: 100px;
        }
      }

      .more {
        display: flex;
        align-items: flex-end;

        .view {
          margin-right: 6px;
        }

        .el-icon {
          line-height: 24px;
          font-size: 24px;
        }
      }
    }
  }

  .img {
    width: 40%;
    background-color: rgb(177, 128, 128);

    background: url(https://tbed.willlee.cn/i/1/38d1ce16dc46426f37b613dd93393e23.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

}

@media screen and (max-width: 600px) {
  .home {
    display: flex;
    flex-direction: column-reverse;
    font-size: 12px;

    .content {
      width: 100%;
      height: 60%;

      .bottom {
        opacity: 0.5 !important;
      }

      .copyRight {
        display: flex;
        flex-direction: column;
      }


      .center {
        transform: translate(-50%, -60%);

        .text {
          font-size: 32px;

          h1 {
            margin-right: 0px;
          }
        }

      }
    }

    .img {
      width: 100%;
      height: 40%;
    }
  }
}
</style>
