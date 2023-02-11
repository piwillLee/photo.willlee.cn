<template>
  <div class="all" ref="albumRef">
    <!-- 页面内容 -->
    <div class="viewer" v-viewer="options">
      <el-row class="content">
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8" v-for="image in imgAllUrlList ">
          <div :ref="maskRef" class="imgContainer">
            <img :ref="elColRef" class="img" v-lazy="image.thumbnail" :data-src="image.source" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from "vue";
import gsap from "gsap";

import useAlbumStore from "@/stores/albumStore/albumStore";

const imgAllUrlList = ref([])
const albumStore = useAlbumStore()
// 遍历数据 得到所有的src
albumStore.albumItemsList.forEach(item => {
  // console.log(item.itemData);
  item.itemData.forEach(item => {
    imgAllUrlList.value.push(
      {
        thumbnail: item.links.thumbnail_url,
        source: item.links.url
      }
    )
  })
});
const options = ref({
  url: "data-src"
})
const albumRef = ref(null)
// 定义一个空数组用来存放dom元素
const maskDomRef = []
const imgDomList = []
// 定义一个函数接收dom元素并存放到空数组中
const maskRef = (el) => {
  maskDomRef.push(el)
}
const elColRef = (el) => {
  imgDomList.push(el)
}

onMounted(() => {
  for (let i = 0; i < maskDomRef.length; i++) {
    imgDomList[i].onload = () => {
      gsap.to('.img', {
        height: imgDomList[0].offsetWidth
      })
      maskDomRef[i].style.backdropFilter = 'none'
      imgDomList[i].style.display = 'block'
      gsap.from(imgDomList[i], { autoAlpha: 0, zIndex: -9, duration: 1, stagger: 1 })
    }
  }
  nextTick(() => {
    imgDomList[0].scrollIntoView()
  })
  window.addEventListener('resize', () => {
    // 获取col的宽度，设置高度等于宽度
    // console.log(elColRef.value);
    gsap.to('.img', {
      height: imgDomList[0].offsetWidth
    })
  })
  window.addEventListener('beforeunload', () => {
    // 获取col的宽度，设置高度等于宽度
    setTimeout(() => {
      height: imgDomList[0].offsetWidth
    }, 50)

    nextTick(() => {
      gsap.to('.img', {
        height: imgDomList[0].offsetWidth
      })
    })
  })
})

const img = new URL('@/assets/album/qtgy/l1.jpg', import.meta.url).href
const bgImg = computed(() => {
  return {
    background: `url(${new URL('@/assets/album/qtgy/l1.jpg', import.meta.url).href})`
  }
})

</script>

<style lang="less" scoped>
.all {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  user-select: none;

  .content {
    max-width: 901px;
    overflow-y: auto;
    border-top: 1px solid var(--el-border-color);
    border-left: 1px solid var(--el-border-color);

    &::-webkit-scrollbar {
      display: none;
    }

    .el-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .imgContainer {
      width: 100%;
      height: 100%;
    }

    .mask {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 999;
      backdrop-filter: blur(10px);
      display: block;
    }

    .img {
      width: 100%;
      height: 100%;
      background-color: var(--el-bg-color);
      border-bottom: 1px solid var(--el-border-color);
      border-right: 1px solid var(--el-border-color);
      object-fit: cover;
      display: none;
    }

  }

  .footer {
    position: absolute;
    width: 100%;
    height: 58px;
    border-top: 1px solid var(--el-border-color);
    bottom: 0;
    left: 0;
    right: 0;
  }



}
</style>
