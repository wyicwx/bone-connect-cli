#bone-connect-cli
> bone-connect命令行工具

[bone-connect](https://github.com/wyicwx/bone-connect)的命令行工具，支持在任何地方开启connect服务器，这个命令行工具是脱离bone存在的，因此不需要bone及其配置，读取的真实文件而非bone的虚拟文件

###安装

```sh
$ npm install -g bone-connect-cli
```

注：安装到全局需要使用sudo提权

###使用

安装成功后使用全局命令启动connect服务器

```sh
bone-connect
```

bone-connect-cli支持参数`base` `host` `port` `livereload`

参数具体查看[bone-connect](https://github.com/wyicwx/bone-connect)

###example
```sh
$ bone connect --port 8080 --base ./dist
```