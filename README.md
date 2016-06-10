### 说明：
在《Eloquent JavaScript》这本书的一个例子（21章节）的基础上，写了简单的匿名小论坛（只能在本地运行）。

### 参考的资料：
1. 参考资料：[eloquentjavascript](http://eloquentjavascript.net/code/#21)。
2. 使用了[MUI](https://www.muicss.com/)框架。

### 已完成：
1. 实现了数据存储到磁盘。
2. 修改了“comment模版”和“talk模版”。
3. 做了material design响应式UI。（MUI框架）
4. 做了界面上的一些修改。（jQuery/html/css）
5. 对json数据结构进行了修改，增加了帖子发表时间。（增了date字段）
6. 统计了评论条数，用jquery分别数每个comments的子节点个数。
7. 添加了帖子类型，可以分类查看。
8. 管理员登入，有权限删除帖子

### Note：
1. bash中进入`skillsharing`目录，然后运行`node skillsharing_server.js`命令，使服务端运行。
2. `localhost:8000` 主界面。
3. `localhost:8000/adminLogin` 管理员登入界面。
4. 管理员账号密码：`xushen／xs`（管理员的登入的flag是`tTc3Xq86RerCTLtq`）

