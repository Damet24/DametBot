create table users(
	id varchar(255) primary key,
    username varchar(255) not null,
    email varchar(255) not  null,
    password varchar(255) not null
);

create table sessions(
	id varchar(255) primary key,
    userId varchar(255) not	 null,
    token varchar(255)	 not null,
    foreign key (userId) references users(id)
);
