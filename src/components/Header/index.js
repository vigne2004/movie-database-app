import {Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import {LuSearch} from 'react-icons/lu'
import './index.css'

const Header = () => {
  const [userInput, setSearchInput] = useState('')
  const history = useHistory()

  const handleSearch = () => {
    history.push(`/search/${userInput}`)
    setSearchInput('')
  }

  const addSearch = event => {
    setSearchInput(event.target.value)
  }

  const submitSearch = event => {
    if (event.key === 'Enter') {
      history.push(`/search/${userInput}`)
      setSearchInput('')
    }
  }

  return (
    <nav className="nav-bar">
      <h1 className="nav-heading">MovieDB</h1>
      <div className="nav-cont">
        <ul className="link-text-cont">
          <li>
            <Link className="list" to="/movie-database-app">
              Popular
            </Link>
          </li>

          <li>
            <Link className="list" to="/top-rated">
              Top Rated
            </Link>
          </li>

          <li>
            <Link className="list" to="/upcoming">
              Upcoming
            </Link>
          </li>
        </ul>

        <div className="search-cont">
          <input
            type="text"
            value={userInput}
            onChange={addSearch}
            className="search-input"
            placeholder="Search Query"
            onKeyDown={submitSearch}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="search-btn"
            disabled={userInput === ''}
          >
            <LuSearch />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
