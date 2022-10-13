<template>
  <el-menu background-color="#001529" :default-active="topId" class="el-menu-demo" mode="horizontal" @select="topClick">
    <el-menu-item v-for="(item, index) in props.menuConfig" :key="item.id" :index="item.id"
      :style="{height: 64, lineHeight: '64px', color: '#fff'}">{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script setup>
import { onMounted } from 'vue'
import { findParent } from './tools'

const props = defineProps(['topId', 'setTopId', 'menuConfig'])

// const { topId, setTopId, setSideNavMenu, setMenuConfig } = store
const pathname = window.location.pathname

const topClick = (index) => {
  if (index !== props.topId) {
    props.topId = index
    props.setTopId(index)
    // setSideNavMenu(
    //   menuConfig.filter((item) => {
    //     return item.id === id - 0
    //   })[0]?.children || []
    // )
  }
}

onMounted(() => {
  // if (props.menuConfig.length > 0) {
  //   const list = findParent(props.menuConfig, pathname)
  //   if (list?.length > 1) {
  //     list[0].key = list[0].id
  //     topClick(list[0])
  //   }
  //   setMenuConfig(menuConfig)
  // }
})
</script>
<style lang="less" scoped>

</style>