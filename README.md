### 说明：
在《Eloquent JavaScript》这本书的一个例子（21章节）的基础上，写了简单的匿名小论坛（只能在本地运行）。

### 参考的资料：
1. 参考资料：[eloquentjavascript](http://eloquentjavascript.net/code/#21)。
2. 使用了[MUI](https://www.muicss.com/)框架。

### 已完成：
1.  实现了帖子（talks）数据存储到磁盘上，服务器重启／崩溃数据可以从磁盘上文件获得。
2. 修改了“评论comment模版”和“帖子talk模版”。
3. 做了符合material design的UI响应式设计。（MUI框架）
4. 界面上的大修改。（jQuery/Html/CSS）
5. 对JSON的数据的结构进行了小修改，增加了帖子发表时间、帖子类型、标签。
6. 统计了评论comment条数，用jQuery分别数每个comments的子节点个数。
7. 添加了帖子类型，并可以分类查看。
8. 管理员登入，管理员才有权限删除帖子。
9. 老师建议：为每个帖子添加了自定义标签。

### 备注：
1. bash中进入`skillsharing`目录，然后运行`node skillsharing_server.js`命令，使服务端运行。
2. `localhost:8000` 主界面。
3. `localhost:8000/adminLogin` 管理员登入界面。
4. 管理员账号密码：`xushen／xs`（管理员的登入的flag是`tTc3Xq86RerCTLtq`）

### 截图：
![image](https://raw.githubusercontent.com/susyxu/skillsharing/master/screenshots/screenshot001.png)
![image](https://raw.githubusercontent.com/susyxu/skillsharing/master/screenshots/screenshot002.png)

