CREATE TABLE video_game (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(55) NOT NULL,
  image VARCHAR(255) NOT NULL
);

INSERT INTO video_game (name, image)
VALUES
  ("Diablo III", 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png'),
  ("Binding of Isaac", 'https://upload.wikimedia.org/wikipedia/en/f/fa/Binding_of_isaac_header.jpg');