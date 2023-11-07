import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('../views/*.vue', { eager: true })

function formatModules(modules: any, result: RouteRecordRaw[]) {
  Object.keys(modules).forEach((key) => {
    const filename = key.match(/\/([^/]+)\.vue$/)![1]
    const defaultModule = modules[key].default as any
    if (!defaultModule) return
    result.push({
      path: `/${filename}`,
      name: filename,
      component: defaultModule
    })
  })
  return result
}

export const appRoutes: RouteRecordRaw[] = formatModules(modules, [])
