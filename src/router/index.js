import { createRouter, createWebHistory } from "vue-router"
import Index from "@/pages/index/index.vue"

const Login = () => import("@/pages/login/index.vue")
const OrderList = () => import("@/pages/order-center/index.vue")
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/order-center/manage/order-list",
      name: "orderList",
      component: OrderList,
    },
  ],
})

export default router
