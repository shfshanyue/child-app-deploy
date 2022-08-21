# 子应用部署为子路径

假设公司独立开发了两个 Application，分别对应如下：

1. main-app：部署在域名 `/` 路径
1. child-app：部署在域名 `/child` 路径

则，应如何完成部署？

这是一个示例，使用以下命令成功部署。

``` bash
$ docker compose up
```

## 如何做

以 webpack 和 nginx 为例，以下使用 `/child` 指代子目录前缀

1. 测试环境与生产环境的 `output.publicPath` 设置为 `/child`，使所有静态资源都需要通过 `/child` 前缀进行访问。
2. 如果涉及到路由，则同样需要设置路由的路径为 `/child` 前缀
3. 打包后的目录假设为 `/build`，打包后 index.html 位置是 `/build/index.html`
4. 将 build 目录移至 nginx 该项目原配置的 root/child 路径下，也就是 `root/child/xxx/xxx`
5. nginx 中的配置 `location /child`，try_files 重写到 `root/child/index.html`
6. 更改成功
