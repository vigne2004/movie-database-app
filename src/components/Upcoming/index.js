import {useState, useEffect} from 'react'

import MovieGrid from '../MovieGrid'

const apiKey = '34b5ec33892c4bd7b7696c6e7ffa8c1b'
const upcomingMoviesURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

const UpcomintPage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [heading, setHeading] = useState('Loading...')

  const fetchMovies = async () => {
    try {
      const response = await fetch(upcomingMoviesURL)
      const data = await response.json()
      if (data.results) {
        setPopularMovies(data.results)
        setHeading('Upcoming Movies') // Set the heading to 'Popular' once the data is fetched
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
export default UpcomintPage
