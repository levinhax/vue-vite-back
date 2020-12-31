export interface MenuDataItem {
  authority?: string[] | string
  children?: MenuDataItem[]
  hideChildrenInMenu?: boolean
  hideInMenu?: boolean
  icon?: string
  locale?: string
  name?: string
  path: string
  [key: string]: unknown
}

export const menuData = [
  {
    key: '1',
    name: 'home',
    path: '/home',
    icon: '',
    meta: {
      title: '首页',
      hidden: false,
    },
  },
  {
    key: '2',
    name: 'dashboard',
    path: '/dashboard',
    icon: 'dashboard', // https://demo.com/icon.png or <Icon type="dashboard" />
    meta: {
      title: 'dashboard',
      hidden: false,
    },
    children: [
      {
        key: '2-1',
        name: 'dashboard-workbench',
        path: '/dashboard/workbench',
        icon: '',
        meta: {
          title: '工作台',
          hidden: false,
        },
      },
      {
        key: '2-2',
        name: 'dashboard-workbench-todo',
        path: '/dashboard/workbench-todo',
        icon: '',
        meta: {
          title: '待做事项',
          hidden: false,
        },
      },
      {
        key: '2-3',
        name: 'dashboard-analysis',
        path: '/dashboard/analysis',
        icon: '',
        meta: {
          title: '分析页',
          hidden: false,
        },
      },
      {
        key: '2-4',
        name: 'dashboard-monitor',
        path: '/dashboard/monitor',
        icon: '',
        meta: {
          title: '监控页',
          hidden: false,
        },
        children: [
          {
            key: '2-4-1',
            name: 'dashboard-alarmMonitor',
            path: '',
            icon: '',
            meta: {
              title: '告警监控',
              hidden: false,
            },
          },
        ],
      },
    ],
  },
]
