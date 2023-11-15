import type { App, Plugin, Component } from 'vue'

export const Prefix = 'devops'

export type WithInstall<T> = T & {
  install(app: Plugin): void
}

export function withInstall<T extends Component>(component: T) {
  return Object.assign(component, {
    install: (app: App) => {
      app.component(`${Prefix.replace(/^\w/, (c) => c.toUpperCase())}${component.name}`, component)
    }
  })
}

export function getPrefixCls(componentName?: string): string {
  if (componentName) {
    return `${Prefix}-${componentName}`
  }
  return Prefix
}
