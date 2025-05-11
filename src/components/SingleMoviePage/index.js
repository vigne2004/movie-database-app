import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import CastItem from '../CastItem'
import './index.css'

const apiKey = '34b5ec33892c4bd7b7696c6e7ffa8c1b'

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])
  const {movieId} = useParams()

  const fetchMovieDetails = async id => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
      const response = await fetch(url)
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      console.log('Error fetching Movie Details:', error)
    }
  }

  const fetchCastDetails = async id => {
    try {
      const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      const response = await fetch(castUrl)
      const data = await response.json()
      setCast(data.cast)
    } catch (error) {
      console.log("Movie's cast not fetched", error)
    }
  }

  useEffect(() => {
    fetchMovieDetails(movieId)
    fetchCastDetails(movieId)
  }, [movieId])

  const renderMovieDetails = () => (
    <div className="movie-cont">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-content">
        <h1 className="movie-heading">{movie.title}</h1>
        <p className="rating">Ratings: {movie.vote_average}</p>
        <p className="duration">Duration: {movie.runtime} min</p>
        <ul className="genre-list">
          {movie.genres.map(each => (
            <li key={each.id} className="genre">
              {each.name}
            </li>
          ))}
        </ul>
        <p className="release-date">Release Date: {movie.release_date}</p>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  )

  const renderCastDetails = () => (
    <div className="cast-cont">
      <ul className="cast-list-cont">
        {cast.map(artist => (
          <CastItem key={artist.id} details={artist} />
        ))}
      </ul>
    </div>
  )

  return (
    <div className="movie-page">
      {movie ? (
        <>
          {'genres' in movie && renderMovieDetails()}
          {cast.length !== 0 && <h1 className="cast-heading">Cast Details</h1>}
          {renderCastDetails()}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
export default SingleMoviePage
