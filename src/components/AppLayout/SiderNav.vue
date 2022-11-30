<template>
  <el-menu mode="vertical" :default-openeds="openKeys" :default-active="selectedKeys+''">
    <el-sub-menu v-for="item in props.sideNavMenu" :index="item.id+''">
      <template #title>
        <span>{{item.title}}</span>
      </template>
      <el-menu-item v-for="(item1) in item.children" :index="item1.id+''" @click="siderClick(item1)"><template #title>
          <span>{{item1.title}}</span>
        </template></el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { findParent } from './tools'

const props = defineProps(['sideNavMenu'])

const openKeys = ref([])
const selectedKeys = ref(null)
const route = useRoute()
let isMounted = true

// React中props变化，整个函数都会执行一遍，但是vue中却不是这样的，所以需要用watch来监听变化
watch(
  () => props.sideNavMenu,
  (menu) => {
    if (menu.length > 0 && isMounted) {
      const list = findParent(menu, route.fullPath)
      if (list?.length === 2) {
        const level2List = list[0]
        const level3List = list[1]
        openKeys.value = [level2List["id"] + ""]
        selectedKeys.value = level3List["id"]
      }
      isMounted = false
    }
  }
)

const history = useRouter()
const siderClick = (data) => {
  history.push(data?.path);
};

</script>
