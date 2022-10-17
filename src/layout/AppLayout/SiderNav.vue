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
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { findParent } from './tools'

const props = defineProps(['sideNavMenu'])

const openKeys = ref([])
const selectedKeys = ref(null)
const route = useRoute()
if (props.sideNavMenu.length > 0) {
  const list = findParent(props.sideNavMenu, route.fullPath)
  if (list?.length === 2) {
    const level2List = list[0]
    const level3List = list[1]
    openKeys.value = [level2List["id"] + ""]
    selectedKeys.value = level3List["id"]
  }
}

const history = useRouter()
const siderClick = (data) => {
  history.push(data?.path);
};

</script>
