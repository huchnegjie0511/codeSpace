CREATE TABLE avatar (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `minitype` vachar(255) NOT NULL,    
    -- 字符最大255 
    `FILENAME` vachar(255) NOT NULL,
    `SIZE` varchar(255) NOT NULL,
    `userId` int(11) NOT NULL,
    -- 主键约束 
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
  -- 唯一索引
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `comment`(
    `id`   INT(11) PRIMARY KEY AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `userId` INT(11) NOT NULL,
    `postId` INT(11) NOT NULL,
    `parentId` INT(11) DEFAULT NULL,
    `createTime` DATETIME NOT NULL,
    `updateTime` DATETIME NOT NULL,
    KEY`userId` (`userId`),
    KEY`postId` (`postId`),
    KEY`parentId` (`parentId`),
    -- 外键约束
    CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
    

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    
