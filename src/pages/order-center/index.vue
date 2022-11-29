<template>
  <SearchTable ref="ref1" :formModel="formModel" :list="List" :getData="Api.list">
    <template #searchParams>
      <el-form-item label="订单编号" prop="orderNo">
        <el-input v-model="formModel.orderNo" placeholder="订单编号" />
      </el-form-item>
      <el-form-item label="城市" prop="cityCode">
        <el-select placeholder="城市" filterable v-model="formModel.cityCode">
          <el-option v-for="item in getBaseType('city')" :label="item.label" :value="item.key" />
        </el-select>
      </el-form-item>
    </template>
    <template #searchButton>
      <el-button type="primary" @click="getParams()">导出</el-button>
    </template>
    <template #column>
      <el-table-column label="操作" fixed="right" width="150">
        <template v-slot="scope">
          <RouterLink class="link" :to="`/order-center/manage/order-list/${scope.row.orderNo}`">详情</RouterLink>
        </template>
      </el-table-column>
    </template>
  </SearchTable>
</template>
  
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import SearchTable from '../../components/SearchTable/index.vue'
import List from './List'
import Api from './Api'
import { getBaseType } from '@/tools'

const formModel = ref({})
const ref1 = ref()
// 获取SearchTable的搜索条件对象，可以用在导出等个性化需求中
function getParams() {
  console.log(ref1.value.formModel)
}
</script>
  
<style lang="less" scoped>
.link {
  color: #409eff;
  text-decoration: none;
}
</style>