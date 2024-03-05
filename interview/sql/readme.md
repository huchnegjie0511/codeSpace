## 字节难度的sql知识    
 
关系型数据库  每个表都是行列式

写一条mysql sql 创建一个表 avatar 用户头像
    索引    要建 为了查询 但是不能乱建
    思考以后的查询需求，先写出来select 语句
        主键索引 primary key
        普通索引 index 首页文章列表\个人主页都要根据用户id 查头像
        唯一索引
        联合索引
        
CREATE TABLE avatar (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `minitype` vachar(255) NOT NULL,    
    <!-- 字符最大255 -->
    `FILENAME` vachar(255) NOT NULL,
    `SIZE` varchar(255) NOT NULL,
    `userId` int(11) NOT NULL,
    <!-- 主键约束 -->
    primary key (`id`)
    KEY`userId` (`userId`)
    CONSTRAINT `avatar_ibfk_1` ROREIGN KEY (`userId`) REFERENCES  `user`  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

    user
    CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  <!-- 唯一索引 -->
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    - 部署
        - 本地部署
            测试数据和服务端代码 blog.sql
        - 远程部署
            阿里云服务器 blog.sql
        - 分布式部署
            blog.sql mysql 运行一下