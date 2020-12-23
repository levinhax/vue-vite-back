import { defineComponent } from 'vue'
import Logo from './assets/logo.png'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={Logo} />
        <h2>Vue 后台管理系统</h2>
        <a-button type="primary">按钮</a-button>
      </>
    )
  },
})
