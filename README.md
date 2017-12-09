# fecs-githooks

[fecs-git-hooks](https://github.com/cxtom/fecs-git-hooks)的二次开发

[![GitHub version](https://badge.fury.io/gh/jingchaofang%2Ffecs-githooks.svg)](https://badge.fury.io/gh/jingchaofang%2Ffecs-githooks)
[![npm version](https://badge.fury.io/js/fecs-githooks.svg)](https://badge.fury.io/js/fecs-githooks)
[![GitHub issues](https://img.shields.io/github/issues/jingchaofang/fecs-githooks.svg)](https://github.com/jingchaofang/fecs-githooks/issues)
[![GitHub forks](https://img.shields.io/github/forks/jingchaofang/fecs-githooks.svg)](https://github.com/jingchaofang/fecs-githooks/network)
[![GitHub stars](https://img.shields.io/github/stars/jingchaofang/fecs-githooks.svg)](https://github.com/jingchaofang/fecs-githooks/stargazers)
[![GitHub license](https://img.shields.io/github/license/jingchaofang/fecs-githooks.svg)](https://github.com/jingchaofang/fecs-githooks)

## 命令行

安装：

    $ npm install fecs-githooks -g

使用：

    $ fecs-githook init
    $ fecs-githook disable

## 命令行

一键安装：./tool/init-fecs.sh

执行项目tool下的shell脚本，即可将最新的钩子pre-commit和配置文件初始化在项目中

* pre-commit 自动拷贝到当前项目下的```.git/hooks/```
* .fecsrc 检查和格式化规则配置文件自动拷贝到项目根目录
* .fecsignore 文件忽略配置文件自动拷贝到项目根目录

## 注意事项

1. 确保本地已经全局安装最新版本[fecs](https://github.com/ecomfe/fecs)
2. 确保本地fecs的所需lesslint在1.02版本以上
3. 格式化文件可能会规则匹配错误，不可信，必须构建工具重新编译检查

脚本更新的配置文件：

* .fecsrc 配置fecs套件的检查和格式化规则
* .fecsignore 配置指定文件忽略fecs套件的检查和格式化