CREATE TABLE product(  
    id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
    create_time DATETIME COMMENT 'create time',
    update_time DATETIME COMMENT 'update time',
    name varchar(45) NOT NULL comment '',
    price FLOAT NOT NULL comment ''
) default charset utf8 comment '';

CREATE TABLE invoice(  
    id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
    create_time DATETIME COMMENT 'create time',
    update_time DATETIME COMMENT 'update time',
    product_id int NOT NULL comment '',
    quantity SMALLINT NOT NULL comment '',
    FOREIGN KEY (product_id) REFERENCES product(id)
) default charset utf8 comment '';