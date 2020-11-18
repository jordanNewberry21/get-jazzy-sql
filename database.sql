CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);

CREATE TABLE "songs" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" VARCHAR(80) NOT NULL,
    "album_name" VARCHAR (120) NOT NULL,
    "song_name" VARCHAR (120) NOT NULL
);