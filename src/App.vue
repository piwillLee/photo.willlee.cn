<script setup lang="ts">
import HeaderNav from "@/components/header.vue";
import { storeToRefs } from "pinia";
import useMainStore from "./stores/mainStore/mainStore";
const mainStore = useMainStore()
const { isHomePage } = storeToRefs(mainStore)

mainStore.handleIsHomePage()
</script>

<template>
  <div class="app">
    <!-- 头部导航 -->
    <div v-if="!isHomePage" class="header">
      <header-nav></header-nav>
    </div>
    <!-- 页面内容 -->
    <div class="content">
      <el-scrollbar style="height:100%">
        <router-view></router-view>
      </el-scrollbar>
    </div>
    <!-- 底部横线 -->
    <div v-show="!isHomePage" class="footer">
      <div class="border"></div>
    </div>
  </div>

</template>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    height: 100%;
    overflow: auto;
  }

  .el-scrollbar {
    height: 100% !important;
  }

  .footer {
    width: 100%;
    height: 58px;
    background: var(--el-bg-color);

    .border {
      border-top: 1px solid var(--el-border-color);
    }
  }
}
</style>
