import './App.css'
import result from './mocks/result.json'
import nonresult from './mocks/nonresult.json'
import RenderMovies from './component/Movies'
import useForm from './hook/useForm'

function App () {
  const{ error, updateSearch} = useForm()
  const{mappedMovies} =RenderMovies({search})
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange=(e)=>{
    updateSearch(e.target.value)
  }

  return (
    <div className="page">
      <header>
        <form className='searchMovie' onSubmit={handleSubmit}>
          <input name='query' onChange={handleChange} type='text' placeholder='Avengers, Star Wars, The Matrix'/>
          <button type='submit'>Search</button>
        </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          mappedMovies
            ? mappedMovies
            : <h2>{ nonresult.Error }</h2>
        }
      </main>
    </div>
  )
}

export default App
