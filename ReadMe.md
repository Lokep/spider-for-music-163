## 爬取网易云音乐歌单

### 启动方法

` npm run start `          启动基础服务

` npm run start:dev `      启动并监听基础服务, 基于nodemon

### 接口调用

> http://localhost:3000/get-music-playlist?id=${id}

> http://${ip}/get-music-playlist?id=${id}

` id ` 是长度为10的网易云歌单ID

` ip ` 为服务当前本地的IP

### 查看接口返回的数据

当访问完接口以后

* 打开页面调试工具, 在 ` network ` 中查看，
  若是在ajax中调用，则在XHR中查看，
  若是直接从地址栏访问，则在ALL里查看

* 或者打开 ` localhost:3000/index.md ` 查看
