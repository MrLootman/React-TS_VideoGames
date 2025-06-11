CREATE TABLE video_game (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(120) NOT NULL UNIQUE,
  image VARCHAR(250)
);

INSERT INTO video_game (name, image)
VALUES
  ("Diablo III", 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png'),
  ("Binding of Isaac", 'https://upload.wikimedia.org/wikipedia/en/f/fa/Binding_of_isaac_header.jpg'),
  ("Hollow Knight", "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png");

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100),
  password VARCHAR(250)
);