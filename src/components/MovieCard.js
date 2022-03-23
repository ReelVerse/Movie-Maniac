import React from 'react'
import { Link } from 'react-router-dom'
import { MovieDetails } from './MovieDetails';

const available_genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

const getGenreNameFromId = (id) => {
    for (const genre of available_genres) {
        if (genre.id === id) return genre.name;
    }
}

export const MovieCard = (props) => {
    const { movie_id, imgUrl, title, description, genre_ids } = props;
    return (
        <div className="col-md-4 col-sm-6 my-3">
            <div className="card">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        {genre_ids.map(genre_id => {
                            return <span key={genre_id} className="badge bg-secondary mx-1">{getGenreNameFromId(genre_id)}</span>
                        })}
                    </p>
                    <Link to={`/details/${movie_id}`} className="btn btn-primary">Know More</Link>
                </div>
            </div>
        </div>
    )
}
