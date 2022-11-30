<template>
  <Button type="primary" :click="handelExport">
    <slot></slot>
  </Button>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import Button from '../Button/index.vue'
const props = defineProps(['name', 'getBlob'])
const { name = "文件.xlsx", getBlob } = props
const handelExport = async () => {
  try {
    const data = await getBlob()
    if (data) {
      // 导出错误信息提示
      if (data.type.includes("application/json")) {
        let reader = new FileReader()
        reader.onload = (e) => {
          if (e.target.readyState === 2) {
            let backJson = JSON.parse(e.target.result)
            ElMessage.error(`${backJson.msg}`)
          }
        }
        reader.readAsText(data)
      } else {
        const link = document.createElement("a")
        link.download = name
        link.href = window.URL.createObjectURL(data)
        link.click()
        window.URL.revokeObjectURL(link.href)
      }
    }
  } catch (err) {
    ElMessage.error("导出失败，请重试")
  }
}
</script>