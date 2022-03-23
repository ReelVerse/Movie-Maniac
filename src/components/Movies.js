import React, { useState, useEffect } from 'react'
import { MovieCard } from './MovieCard'

export const Movies = () => {

    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const url = "https://api.themoviedb.org/3/trending/all/day?api_key=b57b8d755f0a091b919dccd91fb70e7f&language=en";
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.results);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => {
                    return <MovieCard
                        key={movie.id}
                        movie_id={movie.id}
                        imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        title={movie.title}
                        description={movie.overview}
                        genre_ids={movie.genre_ids}
                    />
                })}
            </div>
        </div>
    )
}
