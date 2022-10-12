import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElMessage } from 'element-plus'
import { http, getStorage } from "js-common-library"
import { loginOut } from './tools'
import App from '@/layout/index.vue'
import router from '@/router'
import './assets/main.css'

const { MODE } =import.meta.env
http.setConfig({
  baseURL:
    MODE === "development"
      ? "https://qa01web-gateway.lingxichuxing.com"
      : "https://qa01web-gateway.lingxichuxing.com",
  headers: {
    contextId: "dss",
    "skio-token": getStorage("token"),
  },
  transformResult(res) {
    const { code, data, msg } = res.data || {}
    if (code === 200) {
      return data
    }
    ElMessage.error(
      msg
    )
    if (code === 5001) {
      loginOut()
    }
    return Promise.reject(msg)
  },
  error(e) {
    if (e.response?.status === 401) {
      ElMessage.error(e.response.data?.msg || "用户权限变更需重新获取权限")
      return loginOut()
    }
    ElMessage.error(e.message || "请求异常")
  },
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
