<template>
  <div class="app-layout">
    <div class="app-sider">
      <div class="logo">{{props.logo}}</div>
      <div class="side-nav">
        <SiderNav :sideNavMenu="sideNavMenu"></SiderNav>
      </div>
    </div>
    <div class="app-content">
      <div class="app-header">
        <div class="top-nav">
          <TopNav :menuConfig="props.menuConfig" @setSideNavMenu="setSideNavMenu" class="top-menu"></TopNav>
        </div>
        <div class="extra">
          <slot name="user"></slot>
        </div>
      </div>
      <div class="app-center">
        <Center :menuConfig="props.menuConfig">
          <slot name="router"></slot>
        </Center>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import TopNav from './TopNav.vue'
import SiderNav from './SiderNav.vue'
import Center from './Center.vue'

const props = defineProps(['logo', 'menuConfig', 'extra'])

let sideNavMenu = ref([]);
const setSideNavMenu = (list) => {
  sideNavMenu.value = list;
};

</script>
<style lang="less">
@topH: 64px;

.app-layout {
  display: flex;

  .app-sider {
    min-height: 100vh;
    width: 200px;

    .logo {
      height: @topH;
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
    }
  }

  .app-content {
    flex: 1;
    overflow: hidden;

    .app-header {
      position: relative;
      display: flex;
      justify-content: space-between;
      .top-nav {
        flex: 1;
        margin-right: 20px;
        overflow: hidden;
        height: 64px;

        .top-menu {
          line-height: @topH;
        }
      }

      .extra {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        line-height: 64px;
        margin-right: 30px;
      }
    }

    .app-center {
      padding: 20px;
      min-height: auto;
    }
  }
}
</style>
