<template>
  <div>
    <slot v-if="props.id"></slot>
    <Loading v-else></Loading>
  </div>
</template>

<script setup>
import Loading from "./Loading.vue"

const props = defineProps(['id'])
</script>


