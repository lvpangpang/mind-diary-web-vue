<template>
  <div>
    <App v-if="state.showMenu" :id="state.userInfo.id">
      <AppLayout logo="平台管理系统" :menuConfig="state.userInfo.menus">
        <template #user>
          <User :data="state.userInfo"></User>
        </template>
        <template #router>
          <RouterView />
        </template>
      </AppLayout>
      <el-backtop :right="100" :bottom="100" />
    </App>
    <div v-else>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router'
import { reactive, onMounted } from 'vue'
import { getStorage, setStorage } from 'js-common-library'
import App from '@/components/App/index.vue'
import AppLayout from '@/components/AppLayout/index.vue'
import Api from "./Api";
import User from './User.vue'

const router = useRouter()
const noMenu = ['/login']
const state = reactive({
  userInfo: {},
  showMenu: true
})

router.beforeEach(async (to, from, next) => {
  if (to.path == '/login') {
    next()
  } else {
    if (!getStorage("token")) {
      next({ path: '/login' })
    } else {
      next()
    }
  }
  state.showMenu = !noMenu.includes(to.path)
})

onMounted(async () => {
  if (getStorage('token')) {
    state.userInfo = await Api.getUserInfo()
    const data =  await Api.getDataTypes()
    setStorage('dataType', data)
  }
})


</script>

<style scoped>

</style>
