import type { App } from 'vue'

import {
  // need
  Button,
  message,
  Modal,
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function setupAntd(app: App<Element>) {
  // need
  // Here are the components required before registering and logging in
  app.use(Button)
  app.config.globalProperties.$message = message
  app.config.globalProperties.$confirm = Modal.confirm
}
