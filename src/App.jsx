import { useCallback, useState } from 'react'
import './App.css'
import RenderMovies from './component/Movies'
import useForm from './hook/useForm'
import useMovie from './hook/useMovie'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { error, updateSearch, search } = useForm()
  const { mappedMovies, searchMovie, loading, errorSearch } = useMovie({ search, sort })

  const debounceGetMovie = useCallback(
    debounce(search => {
      console.log('search')
      searchMovie({ search })
    }, 300), [searchMovie])

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovie({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearch(e.target.value)
    debounceGetMovie(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='searchMovie' onSubmit={handleSubmit}>
          <input name='query' value={search} onChange={handleChange} type='text' placeholder='Avengers, Star Wars, The Matrix' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {errorSearch && <p>{errorSearch}</p>}
        {loading
          ? <p>Loading</p>
          : <RenderMovies mappedMovies={mappedMovies} />}
      </main>
    </div>
  )
}

export default App
