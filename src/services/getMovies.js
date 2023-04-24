export function getMovie ({ search }) {
  if (search === '') return null
  return window.fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
    .then(resp => {
      if (!resp.ok) throw new Error('Movie not found!')
      return resp.json()
    })
    .then(json => {
      const mappedMovies = json?.Search.map(pelis => ({
        id: pelis.imdbID,
        title: pelis.Title,
        year: pelis.Year,
        poster: pelis.Poster
      }))
      return mappedMovies
    })
    .catch(e => console.log(e))
}
