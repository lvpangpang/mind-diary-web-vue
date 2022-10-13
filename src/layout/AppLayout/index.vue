<template>
  <div class="app-layout">
    <div class="app-sider">
      <div class="logo">{{props.logo}}</div>
      <div class="side-nav">
        <!-- <SiderNav></SiderNav> -->
      </div>
    </div>
    <div class="app-content">
      <div class="app-header">
        <div class="top-nav">
          <TopNav :topId="topId" :setTopId="setTopId" :menuConfig="props.menuConfig" class="top-menu"></TopNav>
        </div>
        <!-- <div class="extra">{extra}</div> -->
      </div>
      <div class="app-center">
        <!-- <Center>
          <slot></slot>
        </Center> -->
      </div>
    </div>
    <div>吕肥肥{{topId}}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// import { TopNav, SiderNav, Center } from './components'
import TopNav from './TopNav.vue'

const props = defineProps(['logo', 'menuConfig', 'extra'])

let topId = ref(null)
const menuConfig = ref([])


function setTopId(id) {
  topId = id
  console.log(topId)
}



</script>
<style lang="less">
@topH: 64px;

.app-layout {
  display: flex;

  .app-sider {
    background: #fff;
    min-height: 100vh;
    width: 200px;

    .logo {
      background: #001529;
      height: @topH;
      color: #fff;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      line-height: @topH;
    }

    .side-nav {
      overflow-y: hidden;
      overflow-x: hidden;
      max-height: 100vh;
      padding-bottom: 20px;

      &:hover {
        overflow-y: auto;
      }
    }
  }

  .app-content {
    flex: 1;
    overflow: hidden;

    .app-header {
      position: relative;
      display: flex;
      justify-content: space-between;
      background-color: #001529;

      .top-nav {
        flex: 1;
        margin-right: 20px;
        overflow: hidden;

        .top-menu {
          line-height: @topH;
        }
      }

      .extra {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        flex-shrink: 0;
        line-height: 64px;
        margin-right: 30px;
      }
    }

    .app-center {
      padding: 20px;
      min-height: auto;
      background: #f0eeee;

      .content-center {
        background: #fff;
        min-height: calc(100vh - @topH - 40px);
        padding: 20px;
      }
    }
  }
}
</style>
