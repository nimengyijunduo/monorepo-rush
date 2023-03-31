### 代理/服务商管理后台

-   全局安装以下库
    -   `node >= 14.18.0` vite3 运行所需 node 版本
    -   `prettier`

## 目录规范

[参考链接](https://github.com/alan2207/bulletproof-react)

```eg
assets         静态文件
features       按功能拆分，里面目录和外层一致
hooks
lib            一些库文件使用
providers      组件通信
stores         状态管理
types          类型声明
components     react组件
config         声明常量
routes         页面入口
styles         css
utils          公用方法
```

#### unocss

1. 配置文件

-   unocss.config.ts

2. 相关资料

-   [github 地址](https://github.com/unocss/unocss)

-   [交互文档](https://uno.antfu.me/)

-   [为什么使用](https://zhuanlan.zhihu.com/p/425814828)

3. unocss 插件

-   已配置使用

    -   @unocss/preset-attributify [属性化模式](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)
    -   @unocss/preset-tagify [css into html](https://github.com/unocss/unocss/tree/main/packages/preset-tagify)

-   未配置使用
    -   @unocss/preset-icons [字体图标](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
    -   @unocss/preset-web-fonts [web 字体](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts)
    -   @unocss/preset-typography [预设排版](https://github.com/unocss/unocss/tree/main/packages/preset-typography)
    -   @unocss/preset-rem-to-px [rem to px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)
