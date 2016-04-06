DROP TABLE Regions CASCADE;
DROP TABLE Users CASCADE;
DROP TABLE SubRegions CASCADE;

CREATE TABLE Regions (
  id SERIAL PRIMARY KEY,
  publicID VARCHAR(2) UNIQUE
);

CREATE TABLE SubRegions (
  id SERIAL PRIMARY KEY,
  publicID VARCHAR(2) UNIQUE,
  parent INTEGER,
  
  FOREIGN KEY (parent) REFERENCES Regions(id)
);

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100) UNIQUE, 
  twitter_handle VARCHAR(100) UNIQUE,
  phone VARCHAR(20) UNIQUE,
  subRegionID INTEGER,
  addressLine1 VARCHAR(100),
  addressLine2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zipCode VARCHAR(100),
  signupDate DATE,
  veteranStatus VARCHAR(30),
  username VARCHAR(30) UNIQUE,
  password VARCHAR(100),
  
  FOREIGN KEY (subregionID) REFERENCES SubRegions(id)
);
