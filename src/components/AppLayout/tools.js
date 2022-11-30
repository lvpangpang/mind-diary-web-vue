// 根据pathname找到最顶层的路由对象
export function findParent(menuConfig, pathname, list) {
  if (list === undefined) {
    list = []
  }
  for (let i = 0; i < menuConfig.length; i++) {
    const item = menuConfig[i]
    let temp = list.concat(item)
    if (item.children) {
      const match = findParent(item.children, pathname, temp)
      if (match) {
        return match
      }
    }
    if (pathname.includes(item.path)) {
      return temp
    }
  }
}