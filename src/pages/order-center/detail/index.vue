<template>
  <div :style="{ marginBottom: 20 + 'px' }">订单详情</div>
  <Button type="primary" :click="getData">
    搜索
  </Button>
</template>

<script setup>
import Button from '@/components/Button/index.vue'

async function getData() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}
</script>