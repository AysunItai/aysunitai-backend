CREATE DATABASE mywebsite_app;
USE mywebsite_app;

CREATE TABLE contacts (
  id integer PRIMARY KEY AUTO_INCREMENT,
  full_name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  message text NOT NULL,
  created_at timestamp NOT NULL DEFAULT NOW()
) ;

INSERT INTO contacts (full_name,email,message)
VALUES
('LIZA MERRY','liza@marry','weather is strange');