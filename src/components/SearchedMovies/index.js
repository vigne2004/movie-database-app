import {useState, useEffect, useCallback} from 'react'
import {useParams} from 'react-router-dom'

import MovieGrid from '../MovieGrid'

const apiKey = '34b5ec33892c4bd7b7696c6e7ffa8c1b'

const SearchedMoviePage = () => {
  const [movies, setMovies] = useState([])
  const [heading, setHeading] = useState('Loading...')
  const {query} = useParams()

  const fetchSearchedMovies = useCallback(async () => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results || [])
      setHeading('Searched Movies')
    } catch (error) {
      console.log('Movies fetch was failed: ', error)
    }
  }, [query])

  useEffect(() => {
    fetchSearchedMovies()
  }, [query, fetchSearchedMovies])

  return (
    <div className="popular-movies">
      <h1 className="movies-heading">{heading}</h1> {/* Dynamic heading */}
      <MovieGrid movies={movies} />
    </div>
  )
}
export default SearchedMoviePage
