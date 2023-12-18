                                                                                                                                                                                                                                                                          ?      
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            AES256_ECB                                                                                                                                                                                                                                                       --03134283950-20221121-175072-20024                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ?    SYSDBA 0     ?           category
    category?   CREATE TABLE "category"
(
"id" BIGINT IDENTITY(1, 1) NOT NULL,
"name" VARCHAR(255),
"NUMBER" VARCHAR(255),
NOT CLUSTER PRIMARY KEY("id")) STORAGE(CLUSTERBTR) ;   0     ?   
       category 1 饰品	 accessory 2 包 bag 3 皮带 belt 4 帽子 hat 5 裤子 jeans 6 外套  outwear 7 衬衫 shirt 8 鞋 shoe 9 裙子 skirt 10 西装 suit 11 毛衣  sweater 12 T恤 tshirt 13 内衣	 underwear 1     A          cloth
    cloth  CREATE TABLE "cloth"
(
"id" BIGINT IDENTITY(1, 1) NOT NULL,
"classification" VARCHAR(255),
"gender" VARCHAR(255),
"name" VARCHAR(255),
"NUMBER" VARCHAR(255),
"picture" VARCHAR(255),
"price" DOUBLE NOT NULL,
NOT CLUSTER PRIMARY KEY("id")) STORAGE(CLUSTERBTR) ;    1     I   "       cloth 1 belt 1
 男休闲皮带  mBelt01
 mBelt01.png 288 2 jeans 1 男休闲牛仔裤  mJean01
 mJean01.png 358 3 jeans 1 男休闲牛仔裤  mJean02
 mJean02.png 288 4  outwear 1 男休闲皮外套
 mOutwear01 mOutWear01.png 500 5  outwear 1 男休闲厚外套
 mOutwear02 mOutWear02.png 700 6 shirt 1
 男休闲衬衫 mShirt01 mShirt01.png 198 7 shirt 1 男商务长袖衬衫 mShirt02 mShirt02.png 298 8 shoe 1
 男休闲皮鞋  mShoe01
 mShoe01.png 460 9 shoe 1 男休闲运动鞋  mShoe02
 mShoe02.png 290 10  sweater 1
 男休闲毛衣
 mSweater01 mSweater01.png 358 15 tshirt 1 男LEE休闲T恤	 mTShirt01
 mTShirt01.png 128 16 tshirt 1
 男横条长袖T恤	 mTShirt02
 mTShirt02.png 218 36	 underwear 1 白内裤 mUnderWear01 mUnderWear01.png 60 37	 accessory 0 项链 wAcc01
 wAcc01.png 1000 38	 accessory 0 眼镜 wAcc02
 wAcc02.png 600 39 bag 0
 单肩斜挎包 wBag01
 wBag01.png 800 40 hat 0 帽子 wHat01
 wHat01.png 200 41 jeans 0 黑色牛仔裤（女）  wJean01
 wJean01.png 200 42 jeans 0 蓝灰短裤  wJean02
 wJean02.png 180 43 jeans 0 红色短裤  wJean03
 wJean03.png 180 44 jeans 0 奶白长裤  wJean04
 wJean04.png 280 45 jeans 0 黑色短裤  wJean05
 wJean05.png 180 61 shirt 0 碎花衫 wShirt01 wShirt01.png 280 62 shirt 0 红色点衫 wShirt02 wShirt02.png 320 63 shirt 0 蓝色花衫 wShirt03 wShirt03.png 360 64 shoe 0 女鞋  wShoe01
 wShoe01.png 400 65 skirt 0
 灰色连衣裙 wSkirt01 wSkirt01.png 360 66 skirt 0 深棕色连衣裙 wSkirt02 wSkirt02.png 450 67 skirt 0 黑色杂花连衣裙 wSkirt03 wSkirt03.png 680 68 skirt 0 碎花中裙短袖 wSkirt04 wSkirt04.png 299 69 skirt 0 碎花中裙长袖 wSkirt05 wSkirt05.png 390 70 skirt 0 雀金裙 wSkirt06 wSkirt06.png 290 71 skirt 0 闪金裙 wSkirt07 wSkirt07.png 350 72 suit 0 女西装  wSuit01
 wSuit01.png 900 2     ?           dress
    dress?   CREATE TABLE "dress"
(
"id" BIGINT IDENTITY(1, 1) NOT NULL,
"clothnumber" VARCHAR(255),
"username" VARCHAR(255),
"zindex" INTEGER NOT NULL,
NOT CLUSTER PRIMARY KEY("id")) STORAGE(CLUSTERBTR) ;   2     ?          dress 3  mBelt01  1234567 0 4  mJean01  1234567 0 70  mJean01 123456 0 71  mJean02 123456 1 72  wJean01 123456 0 3     3          users
    users?   CREATE TABLE "users"
(
"id" BIGINT IDENTITY(1, 1) NOT NULL,
"gender" INTEGER,
"isadmin" INTEGER,
"model" VARCHAR(255),
"PASSWORD" VARCHAR(255),
"relname" VARCHAR(255),
"username" VARCHAR(255),
NOT CLUSTER PRIMARY KEY("id")) STORAGE(CLUSTERBTR) ;    3     ?          users 1 0 1 mheadA 123456 123456 123456 2 1 1? admin  gunaliy admin 3 0 0 mheadA  1234567  woshini  1234567 4 0 0 mheadB  1111111  1111111  1111111洜x普騾          SYSDBA SYSDBA0販        0   category             ?      0販  ?      1   cloth     ?        $      0販  m      2   dress     m        h      0販  ?      3   users     ?        1      