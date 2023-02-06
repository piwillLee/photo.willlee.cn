<template>
  <div class="header">
    <el-menu class="el-menu" :default-active="route.path" mode="horizontal" :ellipsis="false" router
      @select="handleSelect">
      <div class="logo">
        <img class="logo-img" src="@/assets/img/favicon.ico" alt="" />
        <h3 class="title hover-cursor" @click="handleLogoClick">WILLLEE·PHOTO</h3>
      </div>
      <template v-if="width > 600 ? true : false">
        <div class="nav">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/contents">Contents</el-menu-item>
          <el-menu-item index="/all">All</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <!-- <el-menu-item index="3">Photograph</el-menu-item> -->
          <el-switch @change="handleToggle" v-model="isDarkValue" class="mt-2" style="margin-left: 24px" inline-prompt
            :active-icon="Moon" :inactive-icon="Sunny" />
        </div>
      </template>
      <template v-else>
        <el-button @click="drawer = true">
          <el-icon>
            <Menu />
          </el-icon>
        </el-button>
      </template>
      <el-drawer size="100%" v-model="drawer" title="I am the title" :with-header="false">
        <div class="center">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/contents">contents</el-menu-item>
          <el-menu-item index="/all">All</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>

          <el-switch @change="handleToggle" v-model="isDarkValue" class="mt-2" style="margin-left: 24px" inline-prompt
            :active-icon="Moon" :inactive-icon="Sunny" />
          <el-button @click="drawer = false">
            <el-icon>
              <Close />
            </el-icon>
          </el-button>
        </div>
      </el-drawer>
    </el-menu>

  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";

import { useWindowSize } from '@vueuse/core'
import gsap from "gsap";
import { useRouter, useRoute } from "vue-router";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const isDarkValue = ref(true);
onMounted(() => {
  gsap.fromTo('.logo-img', { rotate: 0 }, { rotate: 360, duration: 36, ease: "sine.out", repeat: -1 })
})

const { width, height } = useWindowSize()
const drawer = ref(false)


const router = useRouter()

// const handleSelect = (item) => {
//   // 滚动到

//   router.push(`/${item}`)

//   console.log(item);
//   document.getElementById(item)?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
//   drawer.value = false
// }
function handleSelect() {
  drawer.value = false
}

function handleLogoClick() {
  router.push('/')
}



const route = useRoute()

function handleToggle() {
  toggleDark();
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  padding: 0 !important;

  // background-color: var(--bg-color);


  .el-menu {
    padding: 0 32px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(253, 245, 230, 0) !important;

  }

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 36px;
    }

    .title {
      margin-left: 16px;
    }
  }

  .el-main {
    height: 100%;
    // background-color: rgba(145, 145, 145, 0.227);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    user-select: none;
  }


  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // background-color: red;

    .el-button {
      margin-top: 50px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
  }


  .el-menu--horizontal {
    border-bottom: var(--el-border-color) solid 1px !important;

  }

  .el-switch {
    margin-left: 0 !important;
    padding: 0 16px;
  }

  .el-switch__core {
    background: red !important;
  }

}
</style>
