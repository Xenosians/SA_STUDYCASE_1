DROP DATABASE IF EXISTS `netmonk`;

CREATE DATABASE `netmonk`;

USE `netmonk`;

DROP TABLE IF EXISTS `subscription`;

CREATE TABLE `subscription`(
    `subscription_id` char (10) NOT NULL,
    `subscription_name` varchar (50) NOT NULL,
    `subscription_period` date,
    `subscription_price` int(10),
    `subscription_status` boolean,
    PRIMARY KEY(`subscription_id`),
    KEY `subscription_id` (`subscription_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `subscription` (`subscription_id`,`subscription_name`,`subscription_period`,`subscription_price`,`subscription_status`) VALUES
("SID#000001","paket1",null,1000000,1);

drop table if exists `user`;

create table `user` (
	`user_id` char(10) not null,
    `user_name` varchar(50) not null,
    `user_email` varchar(50) not null,
    `user_password` varchar(50) not null,
    `user_position` varchar(50),
    `user_departement` varchar(50),
    `user_account_status` varchar(50),
    `user_role` varchar(50),
    primary key (`user_id`)
) engine=InnoDB default charset=latin1;

insert into `user` values
("UID#000001", "Wawan Resing", "lordresing69@gmail.com", "lordresing69", null, null, null, null);

DROP TABLE IF EXISTS `device`;

CREATE TABLE `device`(
    `dev_id` char(10) not null,
    `dev_name` varchar (50) NOT NULL,
    `dev_type` varchar (50) NOT NULL,
    `dev_status` boolean,
    `dev_location` varchar (50),
    `dev_ip` varchar (12),
    PRIMARY KEY(`dev_id`),
    KEY `device` (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `device` (`dev_id`,`dev_name`,`dev_type`,`dev_status`,`dev_location`,`dev_ip`) VALUES
("DEV#000001","samsul","smartphone",1,"indonesia","127.0.0.1");

drop table if exists `connection`;

create table `connection` (
	`conn_id` char(10) not null,
    `conn_type` varchar(50),
    `conn_status` varchar(50),
    `dev_id` char(10) not null,
    primary key (`conn_id`),
    key `device` (`dev_id`),
    foreign key(`dev_id`) references `device`(`dev_id`)
) engine=InnoDB default charset=latin1;

insert into `connection` values
("CID#000001", "WiFi", null, "DEV#000001");

DROP TABLE IF EXISTS `network_interface`;

CREATE TABLE `network_interface`(
    `net_interface_id` char (10) NOT NULL,
    `net_interface_name` varchar (50) NOT NULL,
    `net_interface_type` varchar (50) NOT NULL,
    `net_interface_status` boolean,
    PRIMARY KEY(`net_interface_id`),
    KEY `network_interface` (`net_interface_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `network_interface` (`net_interface_id`,`net_interface_name`,`net_interface_type`,`net_interface_status`) VALUES
("NIF#000001","eth0","LAN",1);

drop table if exists `topology`; 

create table `topology`(
	`topology_id` char(10) not null,
	`topology_name` varchar(50),
	`topology_desc` varchar(50),
    `devices` varchar(50),
    primary key `topology` (`topology_id`)
) engine=InnoDB default charset=latin1;

insert into `topology` (`topology_id`,`topology_name`,`topology_desc`,`devices`) values
("TID#000001", "Topologi1", null,"samsul");

DROP TABLE IF EXISTS `topology_device`;

CREATE TABLE `topology_device`(
    `topology_device_id` char (10) NOT NULL,
    `topology_id` char (10) NOT NULL,
    `dev_id` char (10) NOT NULL,
    PRIMARY KEY(`topology_device_id`),
    KEY `topology_device` (`topology_device_id`),
    FOREIGN KEY (`topology_id`) REFERENCES `topology` (`topology_id`),
    FOREIGN KEY (`dev_id`) REFERENCES `device` (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `topology_device` (`topology_device_id`,`topology_id`,`dev_id`) VALUES
("TDI#000001","TID#000001","DEV#000001");

DROP TABLE IF EXISTS `report`;

CREATE TABLE `report`(
    `report_id` char (10) NOT NULL,
    `report_start_date` date,
    `report_end_date` date,
    `report_data` varchar (50),
    `dev_id` char (10) NOT NULL,
    PRIMARY KEY(`report_id`),
    KEY `report` (`report_id`),
    FOREIGN KEY (`dev_id`) REFERENCES `device` (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `report` (`report_id`,`report_start_date`,`report_end_date`,`report_data`,`dev_id`) VALUES
("RID##00001","2023-05-07","2023-05-08","good","DEV#000001");

drop table if exists `event`;

create table `event`(
	`event_id` char(10) not null,
    `event_type` varchar(50),
    `event_time` date,
    `event_desc` varchar(50),
    `dev_id` char(10) not null,
    primary key (`event_id`),
    key(`dev_id`),
    foreign key (`dev_id`) references `device`(`dev_id`)
) engine=InnoDB default charset=latin1;

insert into `event` values
("EVT#000001", null,"2023-05-07", null, "DEV#000001");

DROP TABLE IF EXISTS `network_analysis`;

CREATE TABLE `network_analysis`(
    `network_analysis_id` char (10) NOT NULL,
    `network_analysis_start_date` date,
    `network_analysis_end_date` date,
    `network_analysis_type` varchar (50),
    `dev_id` varchar (10) NOT NULL,
    PRIMARY KEY(`network_analysis_id`),
    KEY `network_analysis` (`network_analysis_id`),
    FOREIGN KEY (`dev_id`) REFERENCES `device` (`dev_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `network_analysis` (`network_analysis_id`,`network_analysis_start_date`,`network_analysis_end_date`,`network_analysis_type`,`dev_id`) VALUES
("NAI##00001","2023-05-07","2023-05-08","Route","DEV#000001");

DROP TABLE IF EXISTS `platform`;

CREATE TABLE `platform`(
    `platform_id` char (10) NOT NULL,
    `platform_name` varchar(50),
    `platform_api_key` TEXT NULL,
    `platform_api_secret` TEXT NULL,
    PRIMARY KEY(`platform_id`),
    KEY `platform` (`platform_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `platform` (`platform_id`,`platform_name`,`platform_api_key`,`platform_api_secret`) VALUES
("PLT##00001","facebook","ajsjdhkjhw21381273","218312h3k1jhkjhy8dys");

select * from `subscription`;
select * from `user`;
select * from `device`;
select * from `connection`;
select * from `report`;
select * from `event`;
select * from `network_analysis`;
select * from `network_interface`;
select * from `topology`;
select * from `topology_device`;