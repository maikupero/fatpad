-- Lists the names of all people who starred in a movie in which Kevin Bacon also starred.
-- This is the Kevin Bacon born in 1958.
-- Kevin Bacon himself will not be included in the resulting list.

SELECT name

FROM people

WHERE id IN (
    -- IDs of stars in those movies
    SELECT person_id FROM stars WHERE movie_id IN (
    -- Movies with Kevin Bacon
    SELECT movie_id FROM stars WHERE person_id = (
    SELECT id FROM people WHERE birth="1958" AND name="Kevin Bacon")))
AND name NOT IN ("Kevin Bacon");