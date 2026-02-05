CREATE DATABASE IF NOT EXISTS recycling_db;
USE recycling_db;


CREATE TABLE IF NOT EXISTS candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    experience INT NOT NULL,
    skills TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS evaluations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    crisis_score INT CHECK (crisis_score BETWEEN 0 AND 100),
    sustainability_score INT CHECK (sustainability_score BETWEEN 0 AND 100),
    motivation_score INT CHECK (motivation_score BETWEEN 0 AND 100),
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS rankings (
    candidate_id INT PRIMARY KEY,
    total_score DECIMAL(5, 2),
    ranking_position INT,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);