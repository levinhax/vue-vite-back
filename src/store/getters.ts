import { GetterTree } from 'vuex'
import { getters as userGetters } from './modules/user'
import { getters as menusGetters } from './modules/menus'
import { States } from './states'

export const getters: GetterTree<States, unknown> = {
  ...userGetters,
  ...menusGetters,
}
