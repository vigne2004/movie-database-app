import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import PopularPage from './components/Popular'
import TopRatedPage from './components/TopRated'
import UpcomingPage from './components/Upcoming'
import SearchedMoviePage from './components/SearchedMovies'
import SingleMoviePage from './components/SingleMoviePage'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/movie-database-app" component={PopularPage} />
      <Route exact path="/top-rated" component={TopRatedPage} />
      <Route exact path="/upcoming" component={UpcomingPage} />
      <Route exact path="/search/:query" component={SearchedMoviePage} />
      <Route exact path="/movie/:movieId" component={SingleMoviePage} />
    </Switch>
  </>
)

export default App
