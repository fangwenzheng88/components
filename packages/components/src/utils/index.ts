import type { App, Component } from 'vue'

export const Prefix = 'devops'

export type WithInstall<T> = T & {
  install(app: App): void
}

export function withInstall<T extends Component>(component: T): WithInstall<T> {
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
