CREATE DATABASE IF NOT EXISTS IFE_backend CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE IFE_backend;

CREATE TABLE Passengers (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    role ENUM('Passenger', 'Admin', 'Crew') DEFAULT 'Passenger',
    status ENUM('Active', 'Inactive') DEFAULT 'Active',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Flights (
    id CHAR(36) PRIMARY KEY,
    departure VARCHAR(100) NOT NULL,
    destination VARCHAR(100) NOT NULL,
    status ENUM('Scheduled', 'In Progress', 'Completed', 'Cancelled') DEFAULT 'Scheduled',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Feedback (
    id CHAR(36) PRIMARY KEY,
    passengerId CHAR(36) NOT NULL,
    flightId CHAR(36) NOT NULL,
    category ENUM('Service', 'Entertainment', 'Comfort') NOT NULL,
    message TEXT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (passengerId) REFERENCES Passengers(id) ON DELETE CASCADE,
    FOREIGN KEY (flightId) REFERENCES Flights(id) ON DELETE CASCADE
);

CREATE TABLE Entertainment (
    id CHAR(36) PRIMARY KEY,
    type ENUM('Movie', 'TV', 'Music', 'Kids Movie', 'Kids TV', 'Kids Music') NOT NULL,
    title VARCHAR(150) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    language VARCHAR(50) NOT NULL,
    duration INT,
    ageRestriction INT,
    rating FLOAT CHECK (rating BETWEEN 0 AND 5),
    thumbnailUrl TEXT,
    isRecommended BOOLEAN DEFAULT FALSE,
    aiRecommendationData JSON,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Orders (
    id CHAR(36) PRIMARY KEY,
    passengerId CHAR(36) NOT NULL,
    seatNumber VARCHAR(10) NOT NULL,
    items JSON NOT NULL,
    totalPrice FLOAT NOT NULL,
    status ENUM('Pending', 'Preparing', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (passengerId) REFERENCES Passengers(id) ON DELETE CASCADE
);

CREATE TABLE SeatControl (
    id CHAR(36) PRIMARY KEY,
    seatNumber VARCHAR(10) UNIQUE NOT NULL,
    reclinePosition FLOAT DEFAULT 0,
    lightIntensity FLOAT DEFAULT 50,
    temperatureSetting FLOAT DEFAULT 24,
    airFlowSetting FLOAT DEFAULT 50,
    occupantId CHAR(36),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (occupantId) REFERENCES Passengers(id) ON DELETE SET NULL
);

CREATE TABLE FlightPreferences (
    id CHAR(36) PRIMARY KEY,
    passengerId CHAR(36) NOT NULL,
    flightId CHAR(36) NOT NULL,
    sleepMode BOOLEAN DEFAULT FALSE,
    entertainmentMode BOOLEAN DEFAULT TRUE,
    doNotDisturb BOOLEAN DEFAULT FALSE,
    ambientLighting ENUM('Warm', 'Cool', 'Off') DEFAULT 'Warm',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (passengerId) REFERENCES Passengers(id) ON DELETE CASCADE,
    FOREIGN KEY (flightId) REFERENCES Flights(id) ON DELETE CASCADE
);

CREATE DATABASE IF NOT EXISTS IFE_backend;

SELECT user, host, authentication_string FROM mysql.user WHERE user = 'root';

ALTER USER 'root'@'localhost' IDENTIFIED BY '0136';
FLUSH PRIVILEGES;
SHOW DATABASES;
SELECT user, host FROM mysql.user WHERE user = 'root';
CREATE USER 'root'@'localhost' IDENTIFIED BY '0136';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS IFE_backend CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE IFE_backend;
SHOW TABLES;

CREATE TABLE IF NOT EXISTS crew (
  id CHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role ENUM('Pilot', 'Cabin Crew', 'Ground Staff') NOT NULL,
  assignedFlight VARCHAR(255),
  contactNumber VARCHAR(50),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

USE IFE_backend;
SHOW TABLES;

DESCRIBE crew;

DESCRIBE passengers;
DESCRIBE feedback;

SHOW CREATE TABLE passengers;
DESCRIBE passengers;
DESCRIBE passenger_preferences;


DROP TABLE IF EXISTS passenger_preferences;
DROP TABLE IF EXISTS passengers;

CREATE TABLE passenger_preferences (
  id CHAR(36) NOT NULL PRIMARY KEY,
  passengerId CHAR(36) NOT NULL,
  preferredLanguage JSON NULL,
  healthNotificationsEnabled TINYINT(1) DEFAULT 0,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (passengerId) REFERENCES passengers(id)
  ON DELETE CASCADE
  ON UPDATE CASCADE
);
SHOW TABLES;
DESCRIBE passengers;
DESCRIBE flightpreferences;

ALTER TABLE flightpreferences
MODIFY COLUMN preferences JSON NULL;

DESCRIBE seatcontrols;

ALTER TABLE entertainment
MODIFY COLUMN aiRecommendationData JSON NULL;

ALTER TABLE passenger_preferences
MODIFY COLUMN preferredLanguage JSON NULL;

SHOW CREATE TABLE entertainment;
SHOW CREATE TABLE passenger_preferences;
SHOW CREATE TABLE flightpreferences;

ALTER TABLE flightpreferences
ADD COLUMN preferences JSON NULL;

DESCRIBE crew;
DESCRIBE entertainment;
DESCRIBE feedback;
DESCRIBE flight_health_tips;
DESCRIBE flightpreferences;
DESCRIBE flights;
DESCRIBE orders;
DESCRIBE passenger_preferences;
DESCRIBE passengers;
DESCRIBE seatcontrol;

SHOW TABLES LIKE 'flight_health_tips';
ALTER TABLE flight_health_tips
ADD COLUMN flightDurationRange VARCHAR(50) NOT NULL;

INSERT INTO flight_health_tips (id, flightDuration, tips, createdAt, updatedAt)
VALUES (UUID(), 6, 'Stay hydrated and move your legs frequently during the flight.', NOW(), NOW());

SELECT * FROM ife_backend.flight_health_tips;

ALTER TABLE flight_health_tips
MODIFY flightDurationRange VARCHAR(50) DEFAULT NULL;
DESCRIBE flight_health_tips;
ALTER TABLE flight_health_tips
MODIFY flightDurationRange VARCHAR(50) DEFAULT NULL;
INSERT INTO flight_health_tips (id, flightDuration, flightDurationRange, tips, createdAt, updatedAt)
VALUES (UUID(), 6, '4-6', 'Stay hydrated and move your legs frequently during the flight.', NOW(), NOW());
SELECT * FROM flight_health_tips;
ALTER TABLE flight_health_tips
MODIFY flightDurationRange VARCHAR(50) DEFAULT NULL;
INSERT INTO flight_health_tips (id, flightDuration, flightDurationRange, tips, createdAt, updatedAt)
VALUES (UUID(), 6, '4-6', 'Stay hydrated and move your legs frequently during the flight.', NOW(), NOW());
ALTER TABLE flight_health_tips
MODIFY flightDurationRange VARCHAR(50) DEFAULT NULL;
SELECT * FROM flight_health_tips;

DESCRIBE flight_health_tips;

ALTER TABLE flight_health_tips
MODIFY flightDurationRange VARCHAR(50) DEFAULT NULL;

INSERT INTO flight_health_tips (id, flightDuration, flightDurationRange, tips, createdAt, updatedAt)
VALUES (UUID(), 6, '1-3', 'Stay hydrated and move your legs frequently during the flight.', NOW(), NOW());

SELECT * FROM flight_health_tips;

SELECT * FROM flight_health_tips WHERE flightDuration = 6;

INSERT INTO flight_health_tips (id, flightDuration, flightDurationRange, tips, createdAt, updatedAt)
VALUES (UUID(), 6, '4-6', 'Stay hydrated and move your legs frequently during the flight.', NOW(), NOW());

SELECT * FROM flight_health_tips WHERE flightDuration = 6;

