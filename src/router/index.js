import { createRouter, createWebHistory } from "vue-router"
import Index from "@/pages/index/index.vue"

const Login = () => import("@/pages/login/index.vue")
const OrderList = () => import("@/pages/order-center/index.vue")
const OrderDetail = () => import("@/pages/order-center/detail/index.vue")

const { MODE } = import.meta.env

const router = createRouter({
  history: createWebHistory(
    MODE === "development" ? "/" : "/mind-diary-web-vue/"
  ),
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
    {
      path: "/order-center/manage/order-list/:id",
      name: "orderDetail",
      component: OrderDetail,
    },
  ],
})

export default router
