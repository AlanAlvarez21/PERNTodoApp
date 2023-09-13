CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(30),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);


-- INSERT INTO todos(id, user_email, title, progress, date) VALUES('0', 'alanbrito@yopmail.com', 'Primer ToDo', 10,' Tue Sep 12 2023 21:50:18 GMT-0600 (Central Standard Time)' );
