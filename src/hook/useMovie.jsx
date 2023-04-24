import { useCallback, useMemo, useRef, useState } from 'react'
import { getMovie } from '../services/getMovies'

export default function useMovie ({ search, sort }) {
  const [responseMovie, setResponseMovie] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorSearch, setError] = useState(null)
  const prevSearch = useRef(search)

  const searchMovie = useCallback(({ search }) => {
    if (search === prevSearch.current) return
    setLoading(true)
    setError(null)
    prevSearch.current = search
    getMovie({ search })
      .then(res => {
        setResponseMovie(res)
        setLoading(false)
      })
      .catch(e => setError(e.message))
  }, [])

  const sortMovie = useMemo(() => {
    return sort
      ? [...responseMovie].sort((a, b) => a.title.localeCompare(b.title))
      : responseMovie
  }, [responseMovie, sort])

  return { mappedMovies: sortMovie, searchMovie, loading, errorSearch }
}
