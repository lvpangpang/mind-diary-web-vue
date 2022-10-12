<script setup>
import { onMounted } from 'vue'
import { isFun } from "js-common-library"
import Loading from "./Loading.vue"

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const { id } = props

console.log(id)

</script>

<template>
  <div>
    <slot v-if="id"></slot>
    <Loading v-else></Loading>
  </div>
</template>

