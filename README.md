### monorepo-rush

#### 常用命令
1. `rush update` 安装 `packages` 下项目依赖
2. `rush dev --to B` 启动项目 B
3. `rush build --to B` 构建项目 B 以及 B 依赖的项目
4. `rush build --to-except B` 构建 B 依赖的所有项目，但不包括项目 B
3. `rush purge` 怀疑缓存问题时使用 [点击链接](https://rushjs.io/zh-cn/pages/commands/rush_purge/)
