// import { Module } from 'vuex'
// // import { adminMenus } from '/@/api/system/menu'

// const state = {
//   authMenuList: [], // 授权的菜单列表
// }

// type StateType = typeof state

// const menus: Module<StateType, any> = {
//   namespaced: true,
//   state,
//   mutations: {
//     setAuthMenuList(state, payload) {
//       state.authMenuList = payload
//     },
//   },
//   actions: {
//     // 从服务器获取当前登录用户对应权限的菜单列表
//     async getMenusList({ commit }) {
//       // const result = await adminMenus()
//       //   commit('setAuthMenuList', result || [])
//     },
//   },
// }

// export default menus

import { Module, GetterTree, MutationTree, ActionTree } from 'vuex'
import { RootState } from '/@/store/root-state'

export const SET_MENULIST = 'SET_MENULIST'

export interface MenuState {
  authMenuList: string[] // 授权的菜单列表
}

const state: MenuState = {
  authMenuList: [],
}

export const getters: GetterTree<MenuState, unknown> = {
  authMenuList: state => state.authMenuList,
}

const mutations: MutationTree<MenuState> = {
  [SET_MENULIST]: (state, v: string[]) => {
    state.authMenuList = v
  },
}

const actions: ActionTree<MenuState, RootState> = {
  GetMenu({ commit }) {
    return new Promise(resolve => {
      // axios get
      resolve({
        token: '1',
      })
      commit(SET_MENULIST, [])
    })
  },
}

export const menus: Module<MenuState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
