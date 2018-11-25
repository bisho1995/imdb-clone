## Get information about a movie

SELECT movies.name as NAME,movies.release_year AS 'RELEASE YEAR', movies.poster AS POSTER, movies.plot AS PLOT, producers.name AS PRODUCER from movies INNER JOIN producers on movies.producer = producers.id WHERE movies.id=19

## get actors for movie

SELECT actors.name from movies INNER JOIN movie_actors on movies.id = movie_actors.movie_id INNER JOIN actors on movie_actors.actor_id = actors.id where movies.id = 19
