import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import MovieGrid from '../MovieGrid'
import Pagination from '../Pagination'

const apiKey = '34b5ec33892c4bd7b7696c6e7ffa8c1b'

const SearchedMoviePage = () => {
  const [movies, setMovies] = useState([])
  const [heading, setHeading] = useState('Loading...')
  const [page, setPage] = useState(1)
  const {query} = useParams()

  const fetchSearchedMovies = async (pageNo, searchQuery) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${pageNo}`
      const response = await fetch(url)
      const data = await response.json()
      setMovies(data.results || [])
      setHeading('Searched Movies')
    } catch (error) {
      console.log('Movies fetch was failed: ', error)
    }
  }

  useEffect(() => {
    fetchSearchedMovies(page, query)
  }, [query, page])

  const prevPages = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  return (
    <div className="popular-movies">
      <h1 className="movies-heading">{heading}</h1> {/* Dynamic heading */}
      <MovieGrid movies={movies} />
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
export default SearchedMoviePage
