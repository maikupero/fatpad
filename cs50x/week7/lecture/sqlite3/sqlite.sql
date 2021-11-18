.mode
.import

.import 'Favorite TV Shows - Form Responses 1.csv' shows

.schema


 SQLITE3
    # CRUD - create read update delete
    # CiSUD - create insert select update delete

CREATE TABLE table (column type, ...);

SELECT columns FROM table
SELECT title FROM shows;

AVG COUNT DISTINCT LOWER MAX MIN UPPER

WHERE LIKE ORDER_BY LIMIT GROUP_BY

SELECT DISTINCT(UPPER(title)) FROM shows ORDER BY UPPER(title);

SELECT UPPER(TRIM((title)), COUNT(title) FROM shows GROUP BY UPPER(TRIM((title)) ORDER BY COUNT(title) DESC;


-- Bug with csv and using sql.. if we're looking for:
SELECT title FROM shows WHERE genres LIKE "%Music%";
-- music... musical...? suddenly lumped together despite being different.

-- So we'll  create our own tables.
INSERT INTO table (column, ...) VALUES(value, ...);

sqlite> INSERT INTO shows (Timestamp, title, genres) VALUES("now", "The Muppet Show", "Comedy, Musical");
sqlite> SELECT * FROM shows WHERE title LIKE "%Muppet%";
now,"The Muppet Show","Comedy, Musical"
sqlite> UPDATE shows SET genres = "Comedy, Drama, Musical" WHERE title = "The Muppet Show";
sqlite> SELECT * FROM shows WHERE title LIKE "%Muppet%";
now,"The Muppet Show","Comedy, Drama, Musical"

sqlite> SELECT title FROM shows WHERE title LIKE "Friends";
(26 friends listed)
sqlite> SELECT COUNT(title) FROM shows WHERE title LIKE "Friends";
26
sqlite> DELETE FROM shows WHERE title LIKE "Friends";
sqlite> SELECT COUNT(title) FROM shows WHERE title LIKE "Friends";
0


-- A PRIMARY KEY is the column in a table that uniquely identifies each row
-- In another table you are welcome to refer back to that primary key identification - here, a foreign key.