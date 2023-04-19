import './App.css'
import result from './mocks/result.json'
import nonresult from './mocks/nonresult.json'
import RenderMovies from './component/Movies'

function App () {
  const movies = result.Search
  const hasMovie = movies?.length > 0
  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const query = fields.get('query')
    return query
      ? console.log({ query })
      : null
  }

  return (
    <div className="page">
      <header>
        <form className='searchMovie' onSubmit={handleSubmit}>
          <input name='query' type='text' placeholder='Avengers, Star Wars, The Matrix'/>
          <button type='submit'>Search</button>
        </form>
      </header>
      <main>
        {
          hasMovie
            ? RenderMovies({ movies })
            : <h2>{ nonresult.Error }</h2>
        }
      </main>
    </div>
  )
}

export default App
