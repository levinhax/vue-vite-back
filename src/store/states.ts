import { UserState } from './modules/user'
import { MenuState } from './modules/menus'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface States extends UserState, MenuState {}
