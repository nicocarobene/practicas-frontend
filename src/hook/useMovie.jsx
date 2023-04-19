export default function useMovie ({ movies }) {
  const mappedMovies = movies?.map(pelis => ({
    id: pelis.imdbID,
    title: pelis.Title,
    year: pelis.Year,
    poster: pelis.Poster
  }))
  return { mappedMovies }
}
