<template>
  <a-menu
    v-model:open-keys="openKeys"
    v-model:selected-keys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="collapsed"
    @click="clickMenuItem"
  >
    {{ menus[1].title }}
    <template v-for="item in menus" :key="item.title">
      <menu-item :menu-info="item" />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, toRefs } from 'vue'
// import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { Menu } from 'ant-design-vue'
import MenuItem from './menuItem.vue'
// import { useRoute, useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// import { routes } from '/@/router'

export default defineComponent({
  components: {
    MenuItem,
    // 'a-sub-menu': Menu.SubMenu,
    'a-menu': Menu,
    'menu-item': Menu.Item,
  },
  props: {
    collapsed: {
      // 侧边栏菜单是否收起
      type: Boolean,
    },
  },
  setup(props) {
    // 当前路由
    const currentRoute = useRoute()
    // const router = useRouter()
    const store = useStore()

    // 获取当前打开的子菜单
    const getOpenKeys = () => [currentRoute.matched[1]?.name]
    const state = reactive({
      openKeys: getOpenKeys(),
      selectedKeys: [currentRoute.name],
    })
    console.log('layout menu index: ')
    console.log(store.state.menus.authMenuList)
    // const menus = computed(() =>
    //   store.state.menus.authMenuList.length > 0
    //     ? store.state.menus.authMenuList
    //     : routes.find(item => item.name === 'Layout')?.children
    // )
    const menus = [
      {
        key: '1',
        title: 'Option 1',
      },
      {
        key: '2',
        title: 'Navigation 2',
        //   children: [
        //     {
        //       key: '2.1',
        //       title: 'Navigation 3',
        //       children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
        //     },
        //   ],
      },
    ]

    // 监听菜单收缩状态
    watch(
      () => props.collapsed,
      newVal => {
        state.openKeys = newVal ? [] : getOpenKeys()
        state.selectedKeys = [currentRoute.name]
      }
    )

    // 跟随页面路由变化，切换菜单选中状态
    watch(
      () => currentRoute.fullPath,
      () => {
        if (currentRoute.name == 'login' || props.collapsed) return
        state.openKeys = getOpenKeys()
        state.selectedKeys = [currentRoute.name]
      }
    )

    // 点击菜单
    // const clickMenuItem = ({ item, key, keyPath }) => {
    //   console.log(item, key, keyPath)
    //   router.push({ name: key })
    // }
    const clickMenuItem = () => {
      console.log('click Menu Item')
    }

    return {
      ...toRefs(state),
      menus,
      clickMenuItem,
    }
  },
})
</script>
