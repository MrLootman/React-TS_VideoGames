CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(200) NOT NULL
);

INSERT INTO user (email, password)
VALUES
  ("jeanluc@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$RHpncmpkRW5lRzNzTHlydw$ReZYEe5Y6ERnDVHVdlCoug");


CREATE TABLE video_game (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  image VARCHAR(255)
);

INSERT INTO video_game (name, image)
VALUES
  ("Diablo III", 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png'),
  ("Binding of Isaac", 'https://upload.wikimedia.org/wikipedia/en/f/fa/Binding_of_isaac_header.jpg'),
  ("Hollow Knight", "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png")
