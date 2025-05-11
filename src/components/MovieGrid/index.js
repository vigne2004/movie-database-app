import {useHistory} from 'react-router-dom'
import './index.css'

const MovieGrid = ({movies}) => {
  const history = useHistory()

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
          <div className="text-cont">
            <div>
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-rating">Rating: {movie.vote_average}</p>
            </div>
            <button
              type="button"
              onClick={() => history.push(`/movie/${movie.id}`)}
              className="view-btn"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieGrid
