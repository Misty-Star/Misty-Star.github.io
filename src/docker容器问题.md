---
title: Docker杂项
category: Docker
---



# 用GPU运行docker容器

## 前置条件

- Nvidia显卡
- 安装nvidia-container-runtime

### 安装nvidia-container-runtime

1. 添加Nvidia官方apt软件源（必须）

   创建脚本文件nvidia-container-runtime-script.sh

   ```shell
   sudo touch nvidia-container-runtime-script.sh
   ```

   脚本内添加以下内容

   ```shell
   # nvidia-container-runtime-script.sh
   
   sudo curl -s -L https://nvidia.github.io/nvidia-container-runtime/gpgkey | \
     sudo apt-key add -
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
   sudo curl -s -L https://nvidia.github.io/nvidia-container-runtime/$distribution/nvidia-container-runtime.list | \
     sudo tee /etc/apt/sources.list.d/nvidia-container-runtime.list
   sudo apt-get update
   ```

   运行脚本

   ```shell
   sudo sh nvidia-container-runtime-script.sh
   ```

   

2. apt安装

   ```shell
   sudo apt-get install nvidia-container-runtime
   ```

   安装完成后验证一下，输入：

   ```shell
   which nvidia-container-runtime
   ```

   应当得到输出：

   ```shell
   /usr/bin/nvidia-container-runtime
   ```

   

## 用法

在创建容器时添加--gpus all的参数，例如

```cmd
docker run --gpus all image_name:tag_name
```



## 报错

```cmd
docker: Error response from daemon: could not select device driver “” with capabilities: [[gpu]].
```

### 解决方案

安装nvidia-container-runtime



# 容器间通信

## 通过宿主机ip:port

只能依靠监听在暴露出的端口的进程来进行有限的通信。

## 通过 User-defined networks

通过以下命令创建自定义桥接网络，这样同一桥接网络中的容器就可以通过互相访问

```shell
docker network create network_name
```

在创建容器时，使用参数--network，如

```
docker run -d --network network_name --name container1 image_name:tag_name
```

```shell
docker run -d --network network_name --name container2 image_name:tag_name
```

这样两容器间就可以通过**容器名**的形式通信

如

```shell
docker exec -it container1 ping container2
```

