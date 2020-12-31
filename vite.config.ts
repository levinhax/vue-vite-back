// import { SharedConfig  } from 'vite'
import { ServerConfig } from 'vite' // interface ServerConfig extends SharedConfig
import path from 'path'

const pathResolve = (dir: string) => {
  return path.resolve(__dirname, dir)
}

const config: ServerConfig = {
  // open: true, // 浏览器自动运行
  // 导入文件夹别名
  alias: {
    '/@/': pathResolve('./src'),
  },
  // 配置Dep优化行为
  optimizeDeps: {
    // 这个命令专门为解决模块引用的坑而开发
    // 例如我们要在 vite 中使用 lodash，只需要在 vite.config.js （vite 配置文件）中，配置 optimizeDeps 对象，在 include 数组中添加 lodash
    include: ['@ant-design/icons-vue'],
  },
  // 服务端口
  // port: 3000,
  // 代理
  proxy: {
    '/xxx': 'http://localhost:8080/xxx',
    '/ws': {
      target: 'http://doublebrain.cn',
      changeOrigin: true,
      ws: false,
      rewrite: path => path.replace(/^\/api/, ''),
    },
  },
  cssPreprocessOptions: {
    scss: {
      modifyVars: {
        'preprocess-custom-color': 'green',
      },
    },
    // 定制主题配置
    // less: {
    //   modifyVars: {
    //     'primary-color': '#1DA57A',
    //   },
    //   javascriptEnabled: true,
    // },
  },
}

module.exports = config
