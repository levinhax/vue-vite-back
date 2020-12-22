# vue-vite-back

## 项目介绍

后台管理系统，项目基于vue，typescript，ant-design-vue，vite，tsx

## 项目结构

## 使用

### 开发环境

```
npm run dev
```

### 测试环境

```
npm run build:stage # 打包
```

### 生产环境

```
npm run build # 打包

npm run report # 生成构建包报表预览
```

### 格式化

```
npm run lint:prettier # js/ts代码格式化

npm run lint:stylelint # 样式格式化
```

## git commit规范

1. 采用husky配置git hooks，git commit时校验格式；
2. 格式采用commitlint.config.js规范，即<type>: <description>
3. 使用 npm run changelog 可以查看历史提交记录

## 已完成功能

- 项目搭建(依赖包及git commit规范)
