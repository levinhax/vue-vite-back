import { defineComponent } from 'vue'
import Logo from './assets/logo.png'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src={Logo} />
        <h2>Vue 后台管理系统</h2>
        <Button type="primary">{() => '按钮'}</Button>
      </>
    )
  },
})
