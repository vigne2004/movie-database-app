import {useState, useEffect} from 'react'
import './index.css'

import MovieGrid from '../MovieGrid'
import Pagination from '../Pagination'

const apiKey = '34b5ec33892c4bd7b7696c6e7ffa8c1b'

const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [heading, setHeading] = useState('Loading...')
  const [page, setPage] = useState(1)

  const fetchMovies = async pageNo => {
    try {
      const getPopularMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
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
    fetchMovies(page)
  }, [page])

  const prevPages = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  return (
    <div className="popular-movies">
      <h1 className="movies-heading">{heading}</h1> {/* Dynamic heading */}
      <MovieGrid movies={popularMovies} />
      <div className="pagination-cont">
        <Pagination
          prevPages={prevPages}
          page={page}
          nextPage={() => setPage(prev => prev + 1)}
        />
      </div>
    </div>
  )
}
export default PopularPage
