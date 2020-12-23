import { defineComponent, onMounted } from 'vue'
import HelloWord from '../../components/HelloWord'
import Logo from '../../assets/logo.png'
import { Button } from 'ant-design-vue'
import { getGlobEnvConfig } from '/@/utils/env'

export default defineComponent({
  name: 'About',
  setup() {
    onMounted(() => {
      console.log('getGlobEnvConfig: ')
      const globalEnvConfig = getGlobEnvConfig()
      console.log(globalEnvConfig)
    })

    return () => (
      <>
        <h1>About</h1>
        <img src={Logo} />
        <Button type="primary">{() => '按钮'}</Button>
        <HelloWord />
      </>
    )
  },
})
