import { useEffect, useRef, useState } from 'react'

export default function useSearch () {
  const [error, setError] = useState(null)
  const [search, updateSearch] = useState('')
  const isFirstSearch = useRef(true)

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula sin caracteres')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula solo con numeros')
      return
    }
    if (search.length < 3) {
      setError('No se puede buscar una pelicular con menos de 3 letras')
    }
  }, [search])

  if (error) {
    setTimeout(() => {
      setError(null)
    }, 3000)
  }

  return { error, updateSearch, search }
}
