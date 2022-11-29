<template>
  <el-button @click="handleClick" :loading="loading">
    <slot name="children"></slot>
  </el-button>
</template>

<script setup>
import { ref } from 'vue'
import { isFun, isPromise } from 'js-common-library'
const props = defineProps(['click'])
const loading = ref(false)
const onClick = props.click

const handleClick = () => {
  if (isFun(onClick)) {
    const back = onClick();
    if (isPromise(back)) {
      loading.value = true
      back.finally(() => {
        loading.value = false
      });
    }
  }
};
</script>