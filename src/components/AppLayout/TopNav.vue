<template>
  <el-menu :default-active="topId+''" class="el-menu-demo" mode="horizontal">
    <el-menu-item v-for="item in props.menuConfig" :index="item.id +''"
      :style="{height: 64, lineHeight: '64px'}"  @click="topClick(item.id)">{{item.title}}</el-menu-item>
  </el-menu>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { findParent } from './tools'

const props = defineProps(['menuConfig'])
const emit = defineEmits(["setSideNavMenu"])

const topId = ref(null)
const topClick = (index) => {
  if (index !== topId) {
    topId.value = index
    emit('setSideNavMenu', props.menuConfig.filter((item) => {
      return item.id === index
    })[0]?.children || [])
  }
}

onMounted(() => {
  const pathname = window.location.pathname
  if (props.menuConfig.length > 0) {
    const list = findParent(props.menuConfig, pathname)
    if (list?.length > 1) {
      topClick(list[0].id)
    }
  }
})
</script>
<style lang="less" scoped>

</style>