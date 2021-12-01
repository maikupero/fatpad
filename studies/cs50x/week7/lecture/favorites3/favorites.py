# Imports titles and genres from CSV into a SQLite database

import csv
import cs50

# Pythonic way of creating an empty file
open("shows.db", "w").close()
db = cs50.SQL("sqlite:///shows.db")

# Two tables to create for blowing up the comma separated lists of genres:
#   shows           genres
#   id           --<show_id
#   title           genre
# Program that will create the two tables for us
# If you define a column as primary key it will be auto incremented for you.
db.execute("CREATE TABLE shows (id INTEGER, title TEXT, PRIMARY KEY(id))")
db.execute("CREATE TABLE genres (show_id INTEGER, genre TEXT, FOREIGN KEY(show_id) REFERENCES shows(id))")

with open("Favorite TV Shows - Form Responses 1.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        title = row["title"].strip().upper()

        # Insert title C - %s   Py - {}   SQL - ?
        id = db.execute("INSERT INTO shows (title) VALUES(?)", title)

        # Insert genres
        for genre in row["genres"].split(", "):
            db.execute("INSERT INTO genres (show_id, genre) VALUES(?, ?)", id, genre)

# Splitting into two tables seems more confusing no?
# The keys link them together. 
# SELECT title FROM shows WHERE id IN (SELECT show_id FROM genres WHERE genre = "Comedy");
# What genres did we say the office fall under?
# SELECT DISTINCT(genre) FROM genres WHERE show_id IN (SELECT id FROM shows WHERE title LIKE "THE OFFICE") ORDER BY genre;

# Remove redundancies!! make a new table genres.
# shows       shows_genres        genres
# id       <  show_id          <  id
# title       genre_id            name
# Many-to-many relationship. one genre belongs to many shows. one show belongs to many genres.

# Data types
# BLOB  (binary stuff)
# INTEGER
#   smallint
#   integer
#   bigint
# NUMERIC
#   boolean
#   date
#   datetime
#   numeric(scale,position)
#   time
#   timestamp
# REAL
#   real
#   double precision
# TEXT
#   char(n) when knowing the length of the data inputs (US state abbrvs for example)
#   varchar(n)
#   text