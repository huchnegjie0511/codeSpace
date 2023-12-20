/*
Navicat MySQL Data Transfer

Source Server         : a1
Source Server Version : 80030
Source Host           : localhost:3306
Source Database       : suit

Target Server Type    : MYSQL
Target Server Version : 80030
File Encoding         : 65001

Date: 2023-12-19 18:55:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `NUMBER` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '饰品', 'accessory');
INSERT INTO `category` VALUES ('2', '包', 'bag');
INSERT INTO `category` VALUES ('3', '皮带', 'belt');
INSERT INTO `category` VALUES ('4', '帽子', 'hat');
INSERT INTO `category` VALUES ('5', '裤子', 'jeans');
INSERT INTO `category` VALUES ('6', '外套', 'outwear');
INSERT INTO `category` VALUES ('7', '衬衫', 'shirt');
INSERT INTO `category` VALUES ('8', '鞋', 'shoe');
INSERT INTO `category` VALUES ('9', '裙子', 'skirt');
INSERT INTO `category` VALUES ('10', '西装', 'suit');
INSERT INTO `category` VALUES ('11', '毛衣', 'sweater');
INSERT INTO `category` VALUES ('12', 'T恤', 'tshirt');
INSERT INTO `category` VALUES ('13', '内衣', 'underwear');

-- ----------------------------
-- Table structure for cloth
-- ----------------------------
DROP TABLE IF EXISTS `cloth`;
CREATE TABLE `cloth` (
  `id` varchar(255) DEFAULT NULL,
  `classification` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `NUMBER` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of cloth
-- ----------------------------
INSERT INTO `cloth` VALUES ('1', 'belt', '1', '男休闲皮带', 'mBelt01', 'mBelt01.png', '288.0');
INSERT INTO `cloth` VALUES ('2', 'jeans', '1', '男休闲牛仔裤', 'mJean01', 'mJean01.png', '358.0');
INSERT INTO `cloth` VALUES ('3', 'jeans', '1', '男休闲牛仔裤', 'mJean02', 'mJean02.png', '288.0');
INSERT INTO `cloth` VALUES ('4', 'outwear', '1', '男休闲皮外套', 'mOutwear01', 'mOutWear01.png', '500.0');
INSERT INTO `cloth` VALUES ('5', 'outwear', '1', '男休闲厚外套', 'mOutwear02', 'mOutWear02.png', '700.0');
INSERT INTO `cloth` VALUES ('6', 'shirt', '1', '男休闲衬衫', 'mShirt01', 'mShirt01.png', '198.0');
INSERT INTO `cloth` VALUES ('7', 'shirt', '1', '男商务长袖衬衫', 'mShirt02', 'mShirt02.png', '298.0');
INSERT INTO `cloth` VALUES ('8', 'shoe', '1', '男休闲皮鞋', 'mShoe01', 'mShoe01.png', '460.0');
INSERT INTO `cloth` VALUES ('9', 'shoe', '1', '男休闲运动鞋', 'mShoe02', 'mShoe02.png', '290.0');
INSERT INTO `cloth` VALUES ('10', 'sweater', '1', '男休闲毛衣', 'mSweater01', 'mSweater01.png', '358.0');
INSERT INTO `cloth` VALUES ('15', 'tshirt', '1', '男LEE休闲T恤', 'mTShirt01', 'mTShirt01.png', '128.0');
INSERT INTO `cloth` VALUES ('16', 'tshirt', '1', '男横条长袖T恤', 'mTShirt02', 'mTShirt02.png', '218.0');
INSERT INTO `cloth` VALUES ('36', 'underwear', '1', '白内裤', 'mUnderWear01', 'mUnderWear01.png', '60.0');
INSERT INTO `cloth` VALUES ('37', 'accessory', '0', '项链', 'wAcc01', 'wAcc01.png', '1000.0');
INSERT INTO `cloth` VALUES ('38', 'accessory', '0', '眼镜', 'wAcc02', 'wAcc02.png', '600.0');
INSERT INTO `cloth` VALUES ('39', 'bag', '0', '单肩斜挎包', 'wBag01', 'wBag01.png', '800.0');
INSERT INTO `cloth` VALUES ('40', 'hat', '0', '帽子', 'wHat01', 'wHat01.png', '200.0');
INSERT INTO `cloth` VALUES ('41', 'jeans', '0', '黑色牛仔裤（女）', 'wJean01', 'wJean01.png', '200.0');
INSERT INTO `cloth` VALUES ('42', 'jeans', '0', '蓝灰短裤', 'wJean02', 'wJean02.png', '180.0');
INSERT INTO `cloth` VALUES ('43', 'jeans', '0', '红色短裤', 'wJean03', 'wJean03.png', '180.0');
INSERT INTO `cloth` VALUES ('44', 'jeans', '0', '奶白长裤', 'wJean04', 'wJean04.png', '280.0');
INSERT INTO `cloth` VALUES ('45', 'jeans', '0', '黑色短裤', 'wJean05', 'wJean05.png', '180.0');
INSERT INTO `cloth` VALUES ('61', 'shirt', '0', '碎花衫', 'wShirt01', 'wShirt01.png', '280.0');
INSERT INTO `cloth` VALUES ('62', 'shirt', '0', '红色点衫', 'wShirt02', 'wShirt02.png', '320.0');
INSERT INTO `cloth` VALUES ('63', 'shirt', '0', '蓝色花衫', 'wShirt03', 'wShirt03.png', '360.0');
INSERT INTO `cloth` VALUES ('64', 'shoe', '0', '女鞋', 'wShoe01', 'wShoe01.png', '400.0');
INSERT INTO `cloth` VALUES ('65', 'skirt', '0', '灰色连衣裙', 'wSkirt01', 'wSkirt01.png', '360.0');
INSERT INTO `cloth` VALUES ('66', 'skirt', '0', '深棕色连衣裙', 'wSkirt02', 'wSkirt02.png', '450.0');
INSERT INTO `cloth` VALUES ('67', 'skirt', '0', '黑色杂花连衣裙', 'wSkirt03', 'wSkirt03.png', '680.0');
INSERT INTO `cloth` VALUES ('68', 'skirt', '0', '碎花中裙短袖', 'wSkirt04', 'wSkirt04.png', '299.0');
INSERT INTO `cloth` VALUES ('69', 'skirt', '0', '碎花中裙长袖', 'wSkirt05', 'wSkirt05.png', '390.0');
INSERT INTO `cloth` VALUES ('70', 'skirt', '0', '雀金裙', 'wSkirt06', 'wSkirt06.png', '290.0');
INSERT INTO `cloth` VALUES ('71', 'skirt', '0', '闪金裙', 'wSkirt07', 'wSkirt07.png', '350.0');
INSERT INTO `cloth` VALUES ('72', 'suit', '0', '女西装', 'wSuit01', 'wSuit01.png', '900.0');

-- ----------------------------
-- Table structure for dress
-- ----------------------------
DROP TABLE IF EXISTS `dress`;
CREATE TABLE `dress` (
  `id` varchar(255) DEFAULT NULL,
  `clothnumber` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `zindex` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of dress
-- ----------------------------
INSERT INTO `dress` VALUES ('3', 'mBelt01', '1234567', '0');
INSERT INTO `dress` VALUES ('4', 'mJean01', '1234567', '0');
INSERT INTO `dress` VALUES ('70', 'mJean01', '123456', '0');
INSERT INTO `dress` VALUES ('71', 'mJean02', '123456', '1');
INSERT INTO `dress` VALUES ('72', 'wJean01', '123456', '0');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `isadmin` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `relname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '0', '1', 'mheadA', '123456', '123456', '123456');
INSERT INTO `users` VALUES ('2', '1', '1', 'NULL', 'admin', 'gunaliy', 'admin');
INSERT INTO `users` VALUES ('3', '0', '0', 'mheadA', '1234567', 'woshini', '1234567');
INSERT INTO `users` VALUES ('4', '0', '0', 'mheadB', '1111111', '1111111', '1111111');
