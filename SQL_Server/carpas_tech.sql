create database carpas_tech

go 

use carpas_tech

create table leans
	(ds_email_leans varchar(60) primary key,
	nm_leans varchar(35) not null)

create table adm
	(nm_adm varchar(15) primary key,
	ds_senha_adm varchar(15) unique)

create table usuario
	(nm_usuario varchar(15) primary key,
	ds_senha_usuario varchar(15) unique not null,
	ds_email_leans varchar (60) foreign key references leans,
	nm_adm varchar (15) foreign key references adm)

create table produto
	(cd_produto int primary key,
	arq_produto varbinary(max) not null,
	nm_produto varchar(15) not null,
	ds_produto varchar(500) not null,
	nm_usuario varchar(15) foreign key references usuario)

create table produto_leans
	(cd_produto int foreign key references produto,
	ds_email_leans varchar(60) foreign key references leans,
	nm_adm varchar(15) foreign key references adm)
