import type { App } from 'vue'

declare global {
  export interface Window {
    // Global vue app instance
    __APP__: App<Element>
  }
}
