<template>
  <div class="center-main">
    <div class="breadcrumb-box">
      <el-breadcrumb>
        <el-breadcrumb-item v-for="item in breadcrumb">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <slot></slot>
  </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findParent } from './tools'

const props = defineProps(['menuConfig'])
const route = useRoute()
const breadcrumb = ref([])
let list = findParent(props.menuConfig, route.fullPath)
if (list) {
  list.forEach((item) => {
    breadcrumb.value.push(item)
  })
}
watch(() => route.path, () => {
  breadcrumb.value = []
  list = findParent(props.menuConfig, route.fullPath)
  if (list) {
    list.forEach((item) => {
      breadcrumb.value.push(item)
    })
  }
}
)
</script>