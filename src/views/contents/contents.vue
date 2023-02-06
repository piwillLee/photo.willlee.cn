<template>
  <div class="contents">

    <div class="content">
      <el-row style="width: 100%;">
        <!-- 列表 -->
        <div class="item" v-for="item, index in albumList" :key="item.id">
          <el-col :xs="12" :sm="12" :md="12">
            <div class="img"
              :style="{ background: `url(${item.cover})`, backgroundSize: '800%', backgroundPosition: 'center center' }" />
          </el-col>
          <el-col :xs="12" :sm="12" :md="12">
            <el-row>
              <div class="text left">
                <div class="textTop">
                  <h1 class='hover-cursor' @click="albumClick(item)"> {{ item.name }}</h1>
                  <h2> 📷</h2>
                  <small>{{ item.intro }}</small>
                </div>
              </div>
              <div class="text  right">
                <div>0{{ index+ 1 }}</div>
              </div>
            </el-row>
          </el-col>
        </div>
      </el-row>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import useAlbumStore from '@/stores/albumStore/albumStore';
import gsap from 'gsap';
import { useRouter } from 'vue-router';

const albumList = ref([])
const albumStore = useAlbumStore()

// 遍历数据 得到所有
albumStore.albumItemsList.forEach(item => {
  // console.log(item);

  item.itemData.forEach((iten, index) => {
    // console.log(iten);
    if (index == 1) {
      // console.log('1');
      albumList.value.push(
        {
          id: item.idData.id,
          name: item.idData.name,
          intro: item.idData.intro,
          cover: iten.links.thumbnail_url
        })
    }
  }
  )
});

const router = useRouter()
// 点击albumClick
function albumClick(item) {
  router.push({ path: `/album/${item.id}`, query: { id: item.id } })
}


onMounted(() => {
  const tl = gsap.timeline()
  tl.from('.img', { scale: 0, stagger: 0.1, duration: 0.1 })
    .fromTo('.text ', { scale: 0, }, { scale: 1, stagger: 0.1 }, '-=1')
})
</script>

<style lang="less" scoped>
.contents {
  display: flex;
  width: 100%;
  position: relative;
  user-select: none;
  justify-content: center;
  overflow-x: hidden;

  .content {
    width: 100%;
    display: flex;
    font-size: 16px;
    font-weight: 500;

    .item {
      width: 100%;
      display: flex;
      overflow: hidden;

      .el-row {
        width: 100%;
        height: 100%;
        display: flex;

        .text {
          width: 50%;
          border-right: 1px solid var(--el-menu-border-color);
        }

        .right {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }

      @media screen and (max-width: 600px) {
        .el-row {
          .text {
            width: 100%;
            height: 50%;

            .textTop {
              display: flex;
              flex-direction: column;
              align-items: flex-start;


              h1 {
                font-size: 16px;
              }
            }


          }

          .left {
            border: none;
          }

          .right {
            border-top: 1px solid var(--el-menu-border-color);
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;

            div {
              font-size: 16px;
              opacity: 0.5;
            }
          }
        }
      }
    }

    .item:nth-child(2n) {
      display: flex;
      flex-direction: row-reverse;

      .el-row {
        height: 100%;
        display: flex;
        flex-direction: row-reverse;

        .left {
          .textTop {
            // border: 1px solid red;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
        }

        .right {

          display: flex;
          flex-direction: column-reverse;
          align-items: flex-start;
        }
      }

      @media screen and (max-width: 600px) {
        .el-row {
          .text {
            width: 100%;
            height: 50%;

            .textTop {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            }

            h1 {
              font-size: 16px;
            }
          }

          .left {
            border: none;
          }

          .right {
            border-top: 1px solid var(--el-menu-border-color);
            display: flex;

            align-items: flex-start;

            div {
              font-size: 16px;
              opacity: 0.5;
            }
          }
        }
      }


      .text {
        padding: 16px;
        width: 50%;
        height: 100%;
        display: flex;
        // color: red;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        border-right: 1px solid var(--el-menu-border-color);
      }
    }

    .textBottom {
      font-size: 32px;
      opacity: 0.5;
    }

    .el-col {
      height: 300px;
    }

    .img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .img:hover {
      background-size: 100%;
    }

    .img::before {
      width: 100%;
      height: 100%;
      content: '';
      display: block;
      backdrop-filter: blur(500px);
    }

    .img:hover::before {
      width: 100%;
      height: 100%;
      content: '';
      display: block;
      backdrop-filter: blur(150px);
    }

    .text {
      padding: 16px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      h2 {
        margin-bottom: 12px;
      }
    }


  }
}
</style>
