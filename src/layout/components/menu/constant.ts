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
    meta: {
      title: '首页',
      icon: 'icon-facebook',
      hidden: false,
    },
  },
  {
    key: '2',
    name: 'dashboard',
    path: '/dashboard',
    meta: {
      title: 'dashboard',
      icon: 'HomeOutlined', // https://demo.com/icon.png or <Icon type="dashboard" />
      hidden: false,
    },
    children: [
      {
        key: '2-1',
        name: 'dashboard-workbench',
        path: '/dashboard/workbench',
        meta: {
          title: '工作台',
          icon: 'dashboard',
          hidden: false,
        },
      },
      {
        key: '2-2',
        name: 'dashboard-workbench-todo',
        path: '/dashboard/workbench-todo',
        meta: {
          title: '待做事项',
          icon: 'dashboard',
          hidden: false,
        },
      },
      {
        key: '2-3',
        name: 'dashboard-analysis',
        path: '/dashboard/analysis',
        meta: {
          title: '分析页',
          icon: 'dashboard',
          hidden: false,
        },
      },
      {
        key: '2-4',
        name: 'dashboard-monitor',
        path: '/dashboard/monitor',
        meta: {
          title: '监控页',
          icon: 'dashboard',
          hidden: false,
        },
        children: [
          {
            key: '2-4-1',
            name: 'dashboard-alarmMonitor',
            path: '',
            meta: {
              title: '告警监控',
              icon: 'dashboard',
              hidden: false,
            },
          },
        ],
      },
    ],
  },
]
