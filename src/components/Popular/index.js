import {useState, useEffect} from 'react'
import './index.css'

import MovieGrid from '../MovieGrid'

const apiKey = '34b5ec33892c4bd7b7696c6e7ffa8c1b'
const getPopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [heading, setHeading] = useState('Loading...')

  const fetchMovies = async () => {
    try {
      const response = await fetch(getPopularMoviesURL)
      const data = await response.json()
      if (data.results) {
        setPopularMovies(data.results)
        setHeading('Popular Movies') // Set the heading to 'Popular' once the data is fetched
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
      setHeading('Failed to load popular movies')
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="popular-movies">
      <h1 className="movies-heading">{heading}</h1> {/* Dynamic heading */}
      <MovieGrid movies={popularMovies} />
    </div>
  )
}
export default PopularPage
