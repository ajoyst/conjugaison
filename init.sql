CREATE TABLE conjugations (
  ID SERIAL PRIMARY KEY,
  infinitive VARCHAR (255) NOT NULL,
  english VARCHAR (255) NOT NULL,
  type VARCHAR (255) NOT NULL,
  person VARCHAR (255) NOT NULL,
  tense VARCHAR (255) NOT NULL,
  mood VARCHAR (255) NOT NULL,
  conjugation VARCHAR (255) NOT NULL
);

INSERT INTO conjugations (infinitive, english, type, person, tense, mood, conjugation)
VALUES ('avoir', 'to have', 'irregular', 'je', 'present', 'indicative', 'ai');
