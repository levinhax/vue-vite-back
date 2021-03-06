import { createApp } from 'vue'
import router from './router'
import store from './store'
// import App from './App.vue'
import App from './App'
import '/@/styles/index.scss'
// import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
// import { setupAntd } from './setup/ant-design-vue/index'

const app = createApp(App)

// app.use(Antd)
// setupAntd(app)

app.use(router).use(store)

app.mount('#app')
