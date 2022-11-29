<template>
  <div>订单详情</div>
  <Button type="primary" :click="getData">
    <template #children>搜索</template>
  </Button>
</template>

<script setup>
import Button from '../../../components/Button/index.vue'

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
</script>