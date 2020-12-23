import { defineComponent, onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import HelloWord from '../../components/HelloWord'
import Logo from '../../assets/logo.png'
import { Button } from 'ant-design-vue'
import { getGlobEnvConfig } from '/@/utils/env'

export default defineComponent({
  name: 'About',
  components: {
    HelloWord,
  },
  setup() {
    const store = useStore()
    let userName = ref('初始用户名')
    userName = computed(() => store.state.user.userName)
    console.log('userName: ', userName.value)

    const handleLogin = (): void => {
      console.log('提交用户信息')
      store.dispatch('user/Login', {
        token: '测试token',
      })
    }

    const handleChangeInfo = (): void => {
      console.log('更新用户信息')
      store.dispatch('user/GetInfo')
    }

    onMounted(() => {
      console.log('getGlobEnvConfig: ')
      const globalEnvConfig = getGlobEnvConfig()
      console.log(globalEnvConfig)

      console.log('store: ')
      console.log(store.state.user.userName)
    })

    return () => (
      <>
        <h1>About</h1>
        <img src={Logo} />
        <p>用户名: {userName.value}</p>
        <Button type="primary" style={{ marginRight: '20px' }} onClick={handleLogin}>
          {() => '登录'}
        </Button>
        <Button type="primary" onClick={handleChangeInfo}>
          {() => '更新用户信息'}
        </Button>
        <HelloWord />
      </>
    )
  },
})
