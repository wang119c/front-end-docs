### 安装相关依赖
```
cnpm install husky lint-staged -D
```
### 要在安装后自动启用 Git 挂钩，请编辑 package.json
```
npm set-script prepare "husky install"
此时应该有：
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```
### 在 package.json 中配置lint-staged
注：这里 lint-staged 的配置是：在 git 的待提交的文件中，在 src 目录下的所有指定文件都要执行已配置的命令。
```
// package.json
{
   "lint-staged": {
    "src/**/*.{css，scss,less}": [
      "git add" //继续git流程
    ],
    "src/**/*.{js,vue,jsx}": [
       "eslint --fix", // eslint检测修复
       "git add" //继续git流程
    ]
  }
}
```
### 执行命令创建 pre-commit 钩子
注：npx是npm5.2之后发布的一个命令。官网说它是“execute npm package binaries”，就是执行npm依赖包的二进制文件，npx 主要用于命令行的寻址等辅助功能上，而 npm 是管理依赖的。简而言之，就是我们可以使用npx来执行各种命令。npx官网
```
//使用执行 lint-statged 使用本地资源 不下载
npx husky add .husky/pre-commit "npx --no-install lint-staged" 
```
执行命令完成后.husky文件夹中会有一个 pre-commit (修改其中的代码,就是提交代码前需要执行的检查代码的命令)。
```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

//使用执行 lint-statged 使用本地资源 不下载
npx --no-install lint-staged
```
以上，针对husky自定义目录钩子的调整就结束了，当前子目录下的所有husky指令会通过.husky目录去执行。
### 安装配置安装 eslint
需要安装eslint
完成之后，在每次提交代码之前，pre-commit都会拦截 Git 的 commit 操作，然后运行lint-staged命令进行代码检测，若检测到有违反校验规则的情况，则会返回错误，从而导致git commit失败。

```
验证
git add .
git commit -m "test"
绕过
git commit -m "test" --no-verify
```
如果出现未验证的情况
```
在package.json添加并执行
"scripts": { "prepare": "husky install" }
```



