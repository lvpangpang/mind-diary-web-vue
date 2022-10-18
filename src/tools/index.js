import { removeStorage, getStorage } from "js-common-library"

// 获取下拉数据源
export function getBaseType(type) {
  const data = getStorage('dataType')
  return data[type] || []
}

// 退出登录
export function loginOut() {
  removeStorage("token")
  window.location.reload()
}
