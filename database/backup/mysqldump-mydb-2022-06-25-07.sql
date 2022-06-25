-- MySQL dump 10.13  Distrib 5.7.38, for Linux (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	5.7.38-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `mydb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `mydb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `mydb`;

--
-- Table structure for table `gadget`
--

DROP TABLE IF EXISTS `gadget`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gadget` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `damage` int(11) DEFAULT '0',
  `maxHave` int(11) NOT NULL,
  `attdef` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gadget`
--

LOCK TABLES `gadget` WRITE;
/*!40000 ALTER TABLE `gadget` DISABLE KEYS */;
INSERT INTO `gadget` VALUES (1,'수류탄','',150,2,1),(2,'섬광탄','',0,3,1),(3,'연막탄','',0,2,1),(4,'접착폭약','',150,3,1),(5,'대인지뢰','',150,2,1),(6,'강력 접착폭약','',150,2,1),(7,'방탄카메라','',0,1,0),(8,'C4','',150,1,0),(9,'철조망','',0,2,0),(10,'이동식 방패','',0,1,0),(11,'충격수류탄','',50,2,0),(12,'근접알람','',0,2,0);
/*!40000 ALTER TABLE `gadget` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gadgetlist`
--

DROP TABLE IF EXISTS `gadgetlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gadgetlist` (
  `op_id` int(11) NOT NULL,
  `gadget_id` int(11) NOT NULL,
  PRIMARY KEY (`op_id`,`gadget_id`),
  KEY `gadget_id` (`gadget_id`),
  CONSTRAINT `gadgetlist_ibfk_1` FOREIGN KEY (`op_id`) REFERENCES `operator` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `gadgetlist_ibfk_2` FOREIGN KEY (`gadget_id`) REFERENCES `gadget` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gadgetlist`
--

LOCK TABLES `gadgetlist` WRITE;
/*!40000 ALTER TABLE `gadgetlist` DISABLE KEYS */;
INSERT INTO `gadgetlist` VALUES (2,1),(5,1),(17,1),(2,2),(5,2),(10,2),(2,3),(10,3),(13,3),(14,3),(17,3),(21,3),(2,4),(6,4),(9,4),(18,4),(21,4),(22,4),(2,5),(6,5),(9,5),(13,5),(22,5),(2,6),(14,6),(18,6),(1,7),(4,7),(7,7),(11,7),(19,7),(1,8),(4,8),(8,8),(15,8),(20,8),(1,9),(3,9),(8,9),(11,9),(16,9),(19,9),(20,9),(1,10),(3,10),(16,10),(1,11),(12,11),(15,11),(1,12),(7,12),(12,12);
/*!40000 ALTER TABLE `gadgetlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operator`
--

DROP TABLE IF EXISTS `operator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `operator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attdef` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `speed` int(11) NOT NULL,
  `skill` int(11) NOT NULL,
  `img` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operator`
--

LOCK TABLES `operator` WRITE;
/*!40000 ALTER TABLE `operator` DISABLE KEYS */;
INSERT INTO `operator` VALUES (1,0,'예비병력',2,0,'recruit.png'),(2,1,'예비병력',2,0,'recruit.png'),(3,0,'스모크',2,0,'smoke.png'),(4,0,'뮤트',2,0,'mute.png'),(5,1,'슬렛지',2,0,'sledge.png'),(6,1,'대처',2,0,'thatcher.png'),(7,0,'캐슬',2,0,'castle.png'),(8,0,'펄스',2,0,'pulse.png'),(9,1,'애쉬',3,0,'ash.png'),(10,1,'써마이트',2,0,'thermite.png'),(11,0,'닥',1,0,'doc.png'),(12,0,'룩',1,0,'rook.png'),(13,1,'트위치',2,0,'twitch.png'),(14,1,'몽타뉴',1,0,'montagne.png'),(15,0,'캅칸',2,0,'kapkan.png'),(16,0,'타찬카',1,0,'tachanka.png'),(17,1,'글라즈',1,0,'glaz.png'),(18,1,'퓨즈',1,0,'fuze.png'),(19,0,'예거',2,0,'jager.png'),(20,0,'밴딧',3,0,'bandit.png'),(21,1,'블리츠',3,0,'blitz.png'),(22,1,'아이큐',2,0,'iq.png'),(23,0,'프로스트',2,0,NULL),(24,1,'벅',2,0,NULL),(25,0,'발키리',2,0,NULL),(26,1,'블랙비어드',2,0,NULL),(27,0,'카베이라',3,0,NULL),(28,1,'카피탕',2,0,NULL),(29,0,'에코',1,0,NULL),(30,1,'히바나',3,0,NULL),(31,0,'미라',1,0,NULL),(32,1,'자칼',2,0,NULL),(33,0,'리전',2,0,NULL),(34,1,'잉',2,0,NULL),(35,0,'엘라',3,0,NULL),(36,1,'조피아',2,0,NULL),(37,0,'비질',3,0,NULL),(38,1,'도깨비',2,0,NULL),(39,1,'핀카',2,0,NULL),(40,1,'라이언',2,0,NULL),(41,0,'알리바이',3,0,NULL),(42,1,'마에스트로',1,0,NULL),(43,0,'클래시',1,0,NULL),(44,1,'매버릭',3,0,NULL),(45,0,'카이드',1,0,NULL),(46,1,'노매드',2,0,NULL),(47,0,'모찌',2,0,NULL),(48,1,'그리드락',1,0,NULL),(49,1,'뇌크',2,0,NULL),(50,0,'워든',2,0,NULL),(51,1,'아마루',2,0,NULL),(52,0,'고요',2,0,NULL),(53,0,'와마이',2,0,NULL),(54,1,'칼리',1,0,NULL),(55,0,'오릭스',2,0,NULL),(56,1,'야나',2,0,NULL),(57,0,'멜루시',3,0,NULL),(58,1,'에이스',2,0,NULL),(59,0,'아루니',2,0,NULL),(60,1,'제로',2,0,NULL),(61,0,'썬더버드',1,0,NULL),(62,1,'플로레스',2,0,NULL),(63,0,'쏜',2,0,NULL),(64,1,'오사',2,0,NULL),(65,0,'아자미',2,0,NULL);
/*!40000 ALTER TABLE `operator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optype`
--

DROP TABLE IF EXISTS `optype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `optype` (
  `speed` int(11) NOT NULL,
  `health` int(11) NOT NULL,
  PRIMARY KEY (`speed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optype`
--

LOCK TABLES `optype` WRITE;
/*!40000 ALTER TABLE `optype` DISABLE KEYS */;
INSERT INTO `optype` VALUES (1,125),(2,110),(3,100);
/*!40000 ALTER TABLE `optype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill`
--

DROP TABLE IF EXISTS `skill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `skill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill`
--

LOCK TABLES `skill` WRITE;
/*!40000 ALTER TABLE `skill` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weapon`
--

DROP TABLE IF EXISTS `weapon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weapon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `damage` int(11) NOT NULL,
  `armo` int(11) NOT NULL,
  `spm` int(11) NOT NULL,
  `type` varchar(6) NOT NULL,
  `pallet` int(11) NOT NULL,
  `ismain` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weapon`
--

LOCK TABLES `weapon` WRITE;
/*!40000 ALTER TABLE `weapon` DISABLE KEYS */;
INSERT INTO `weapon` VALUES (1,'.44 Mag Semi-Auto',54,7,1,'hg',1,0),(2,'1911 TACOPS',55,8,1,'hg',1,0),(3,'416-C CARBINE',38,25,740,'ar',1,1),(4,'417',69,20,1,'sr',1,1),(5,'5.7 USG',42,20,1,'hg',1,0),(6,'552 COMMANDO',48,30,690,'ar',1,1),(7,'556XI',47,30,690,'ar',1,1),(8,'6P41',46,100,680,'lmg',1,1),(9,'9mm C1',45,34,575,'smg',1,1),(10,'9x19VSN',34,30,750,'smg',1,1),(11,'ACS12',69,30,300,'sg',8,1),(12,'AK-12',45,30,850,'ar',1,1),(13,'AK-74M',44,40,650,'ar',1,1),(14,'ALDA 5.56',35,80,900,'lmg',1,1),(15,'AR-15.50',62,10,1,'sr',1,1),(16,'AR33',41,25,749,'ar',1,1),(17,'ARX200',47,20,700,'ar',1,1),(18,'AUG A2',42,30,720,'ar',1,1),(19,'AUG A3',36,31,700,'smg',1,1),(20,'Bailiff 410',30,5,1,'hg',4,0),(21,'BEARING 9',33,25,1100,'smg',1,0),(22,'BOSG.12.2',125,2,1,'sg',8,1),(23,'C75 Auto',35,26,1000,'smg',1,0),(24,'C7E',42,25,800,'ar',1,1),(25,'C8-SFW',40,30,837,'ar',1,1),(26,'CAMRS',69,20,1,'sr',1,1),(27,'CCE 방패',0,0,0,'shield',1,1),(28,'COMMANDO 9',36,25,780,'ar',1,1),(29,'CSRX 300',127,5,1,'sr',1,1),(30,'D-50',71,7,1,'hg',1,0),(31,'DP27',49,70,550,'lmg',1,1),(32,'F2',39,25,980,'ar',1,1),(33,'F90',38,30,780,'ar',1,1),(34,'FMG-9',34,30,800,'smg',1,1),(35,'FO-12',25,10,1,'sg',8,1),(36,'G36C',38,30,780,'ar',1,1),(37,'G8A1',37,60,850,'lmg',1,1),(38,'GONNE-6',10,1,1,'hc',1,0),(39,'GSH-18',44,18,1,'hg',1,0),(40,'ITA12L',50,7,1,'sg',8,1),(41,'ITA12S',70,4,1,'sg',8,0),(42,'K1A',36,30,720,'smg',1,1),(43,'KERATOS .357',78,6,1,'hg',1,0),(44,'L85A2',47,30,670,'ar',1,1),(45,'LFP586',78,6,1,'hg',1,0),(46,'LMG-E',41,150,720,'lmg',1,1),(47,'LUISON',65,12,1,'hg',1,1),(48,'M1014',34,7,1,'sg',8,1),(49,'M12',40,30,550,'smg',1,1),(50,'M249',48,100,650,'lmg',1,1),(51,'M249 SAW',48,60,650,'lmg',1,1),(52,'M4',44,30,750,'ar',1,1),(53,'M45 MEUSOC',58,7,1,'hg',1,0),(54,'M590A1',48,6,1,'sg',8,1),(55,'M762',45,30,730,'ar',1,1),(56,'M870',60,6,1,'sg',8,1),(57,'Mk 14 EBR',60,20,1,'sr',1,1),(58,'MK1 9mm',48,13,1,'hg',1,0),(59,'MK17 CQB',40,20,585,'ar',1,1),(60,'MP5',27,30,800,'smg',1,1),(61,'MP5K',30,30,800,'smg',1,1),(62,'MP5SD',30,30,800,'smg',1,1),(63,'MP7',32,30,900,'smg',1,1),(64,'MPX',26,30,830,'smg',1,1),(65,'Mx4 Storm',26,30,950,'smg',1,1),(66,'OTs-03',71,15,1,'sr',1,1),(67,'P10 RONI',26,15,980,'smg',1,1),(68,'P-10C',40,15,1,'hg',1,0),(69,'P12',44,15,1,'hg',1,0),(70,'P226 MK 25',50,15,1,'hg',1,0),(71,'P229',51,12,1,'hg',1,0),(72,'P9',45,16,1,'hg',1,0),(73,'P90',22,50,970,'smg',1,1),(74,'PARA-308',48,30,650,'ar',1,1),(75,'PDW9',34,50,800,'smg',1,1),(76,'PMM',61,8,1,'hg',1,0),(77,'POF-9',35,50,740,'ar',1,1),(78,'PRB92',42,15,1,'hg',1,0),(79,'Q-929',60,10,1,'hg',1,0),(80,'R4-C',39,30,860,'ar',1,1),(81,'RG15',38,15,1,'hg',1,0),(82,'SASG-12',50,10,1,'sg',8,1),(83,'SC3000K',45,25,800,'ar',1,1),(84,'SCORPION EVO 3 A1',23,40,1080,'smg',1,1),(85,'SDP 9mm',47,16,1,'hg',1,0),(86,'SG-CQB',53,6,1,'sg',8,1),(87,'SIX12',35,6,1,'sg',8,1),(88,'SIX12 SD',35,6,1,'sg',8,1),(89,'SMG-11',35,16,1270,'smg',1,0),(90,'SMG-12',28,32,1270,'smg',1,0),(91,'SPAS-12',35,6,1,'sg',8,1),(92,'SPAS-15',30,6,1,'sg',8,1),(93,'SPEAR .308',42,30,700,'ar',1,1),(94,'SPSMG9',33,20,980,'smg',1,0),(95,'SR-25',61,20,1,'sr',1,1),(96,'SUPER 90',35,7,1,'sg',8,0),(97,'SUPER SHORTY',35,2,1,'sg',8,0),(98,'SUPERNOVA',48,6,1,'sg',8,1),(99,'T-5 SMG',28,30,900,'smg',1,1),(100,'T-95 LSW',46,80,650,'lmg',1,1),(101,'TCSG12',63,10,1,'sg',8,1),(102,'TYPE-89',40,20,850,'ar',1,1),(103,'UMP45',38,25,600,'smg',1,1),(104,'USP40',48,12,1,'hg',1,0),(105,'UZK50GI',44,22,700,'smg',1,1),(106,'V308',44,50,700,'ar',1,1),(107,'VECTOR .45 ACP',23,25,1200,'smg',1,1),(108,'방탄방패',0,0,0,'shield',1,1),(109,'섬광방패',0,0,0,'shield',1,1),(110,'확장방패',0,0,0,'shield',1,1);
/*!40000 ALTER TABLE `weapon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weaponlist`
--

DROP TABLE IF EXISTS `weaponlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weaponlist` (
  `op_id` int(11) NOT NULL,
  `weapon_id` int(11) NOT NULL,
  PRIMARY KEY (`op_id`,`weapon_id`),
  KEY `weapon_id` (`weapon_id`),
  CONSTRAINT `weaponlist_ibfk_1` FOREIGN KEY (`op_id`) REFERENCES `operator` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `weaponlist_ibfk_2` FOREIGN KEY (`weapon_id`) REFERENCES `weapon` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weaponlist`
--

LOCK TABLES `weaponlist` WRITE;
/*!40000 ALTER TABLE `weaponlist` DISABLE KEYS */;
INSERT INTO `weaponlist` VALUES (7,5),(8,5),(9,5),(10,5),(10,7),(6,16),(2,23),(3,34),(9,36),(2,44),(5,44),(6,44),(7,48),(8,48),(10,48),(1,49),(2,50),(8,53),(9,53),(10,53),(3,54),(4,54),(5,54),(6,54),(2,57),(1,61),(4,61),(2,69),(3,70),(4,70),(5,70),(6,70),(1,72),(9,80),(1,89),(3,89),(4,89),(2,97),(7,97),(7,103),(8,103);
/*!40000 ALTER TABLE `weaponlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-25  7:23:58
