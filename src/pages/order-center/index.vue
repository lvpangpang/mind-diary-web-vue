<template>
  <el-form ref="formInlineRef" :inline="true" :model="formInline">
    <el-form-item label="订单编号" prop="orderNo">
      <el-input v-model="formInline.orderNo" placeholder="订单编号" />
    </el-form-item>
    <el-form-item label="城市" prop="cityCode">
      <el-select v-model="formInline.cityCode" placeholder="城市">
        <el-option label="杭州" value="0571" />
        <el-option label="北京" value="0110" />
      </el-select>
    </el-form-item>
    <el-space class="search-btn-box" size="16">
      <el-button type="primary" @click="onSubmit(formInlineRef)">搜索</el-button>
      <el-button type="primary" @click="rest(formInlineRef)">重置</el-button>
    </el-space>
  </el-form>

  <el-table :border="true" v-loading="state.loading" :data="state.list" style="width: 100%">
    <el-table-column v-for="item in List" :prop="item.dataIndex" :label="item.title" :fixed="item.fixed" />
    <el-table-column label="操作" fixed="right" width="150">
      <RouterLink class="link" :to="`/order-center/manage/order-list/${89798789}`">详情</RouterLink>
    </el-table-column>
  </el-table>

  <div class="pagination-box">
    <el-pagination :page-size="10" layout="prev, pager, next, jumper" :current-page="state.page"
      @current-change="currentChange" :total="state.total" />
  </div>
  {{
  search.name
  }}
</template>

<script setup>
import { reactive, ref, onMounted, toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import List from './List'
import Api from './Api';

const store = useStore()
const { search } = toRefs(store.state)

store.commit('changeSearch', {name: 2})
let state = reactive({
  list: [],
  total: 0,
  page: 1,
  loading: true
})
const formInlineRef = ref()
const formInline = reactive({
  orderNo: '',
  cityCode: '',
})

// 搜索
const onSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      getData({ ...formInline, pageNum: 1 })
    }
  })
}

// 重置
const rest = (form) => {
  form.resetFields()
}

// 页码切换
const currentChange = (current) => {
  getData({ pageNum: current })
}

// 获取数据
const getData = async (...params) => {
  state.loading = true
  const { list, total, page } = await Api.list(...params)
  state.list = list
  state.total = total
  state.page = page
  state.loading = false
}

onMounted(() => {
  getData()
})

</script>

<style lang="less" scoped>
.search-btn-box,
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