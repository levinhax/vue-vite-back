<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
      <!-- 网站logo -->
      <logo :collapsed="collapsed" />
      <!-- 侧边菜单栏 -->
      <aside-menu :collapsed="collapsed" />
    </a-layout-sider>

    <a-layout>
      <!-- 页头 -->
      <!-- <page-header v-model:collapsed="collapsed" /> -->
      <!-- 内容区域 -->
      <a-layout-content class="layout-content">
        <!-- 这里是内容 -->
        <!-- <router-transition :not-need-key="true" :animate="false" /> -->
        <router-view></router-view>
      </a-layout-content>
      <!-- 页脚 -->
      <page-footer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, h } from 'vue'
import { Layout, message } from 'ant-design-vue'
import AsideMenu from './components/menu/index.vue'
import Logo from './components/logo'
import PageFooter from './components/footer'
// import RouterTransition from '/@/components/routerTransition/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    AsideMenu,
    Logo,
    PageFooter,
    [Layout.name]: Layout,
    [Layout.Content.name]: Layout.Content,
    [Layout.Sider.name]: Layout.Sider,
    // RouterTransition,
  },
  setup() {
    const collapsed = ref<boolean>(false)
    const handleShowMsg = () => {
      message.success(h('span', '这是一条测试信息，两秒后自动关闭'), 2)
    }
    const asiderWidth = computed(() => (collapsed.value ? '80px' : '256px'))

    onMounted(() => {
      handleShowMsg()
    })

    return {
      collapsed,
      handleShowMsg,
      asiderWidth,
    }
  },
})
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;

  .layout-sider {
    max-width: 320px;
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-content {
    flex: none;
    min-height: calc(100vh - 80px);
  }
}
</style>
