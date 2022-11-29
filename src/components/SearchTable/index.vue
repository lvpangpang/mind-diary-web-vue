<template>
  <el-form ref="formRef" :inline="true" :model="formModel">
    <slot name="searchParams"></slot>
    <el-space class="searchParams-btn-box" :size="16">
      <el-button type="primary" @click="onSubmit(formRef)">搜索</el-button>
      <el-button type="primary" @click="rest(formRef)">重置</el-button>
      <slot name="searchButton"></slot>
    </el-space>
  </el-form>

  <el-table :border="true" v-loading="state.loading" :data="state.list" style="width: 100%">
    <el-table-column v-for="item in props.list" :prop="item.dataIndex" :label="item.title" :fixed="item.fixed"
      width="200" />
    <slot name="column"></slot>
  </el-table>

  <div class="pagination-box">
    <el-pagination :page-size="10" layout="prev, pager, next, jumper" :current-page="state.page"
      @current-change="currentChange" :total="state.total" />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const props = defineProps(['formModel', 'list', 'getData'])
const formModel = reactive(props.formModel)
const formRef = ref()
let state = reactive({
  list: [],
  total: 0,
  page: 1,
  loading: true
})
let timer = null

// 搜索
const onSubmit = (formEl) => {
  if (timer) return
  timer = setTimeout(() => {
    formEl.validate(async (valid) => {
      if (valid) {
        store.commit('changeSearchParams', formModel)
        getData()
        clearTimeout(timer)
        timer = null
      }
    })
  }, 300)
}

// 重置
const rest = (form) => {
  store.commit('changeSearchParams', {})
  form.resetFields()
}

// 页码切换
const currentChange = (current) => {
  getData({ pageNum: current })
}

// 获取数据
const getData = async (params) => {
  state.loading = true
  const { list, total, page } = await props.getData({ ...formModel, pageNum: 1, ...params })
  state.list = list
  state.total = total
  state.page = page
  state.loading = false
}

const store = useStore()
const { searchParams } = store.state // 把搜索条件保存在store里面

onMounted(() => {
  // 不能直接赋值 否则formModal会失去响应式
  const keys = Object.keys(searchParams)
  if (keys.length) {
    keys.forEach((item) => {
      formModel[item] = searchParams[item]
    })
  }
  getData()
})


defineExpose({
  formModel
})
</script>

<style lang="less" scoped>
.searchParams-btn-box,
.pagination-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.pagination-box {
  margin-top: 20px;
}

.link {
  color: #409eff;
  text-decoration: none;
}
</style>