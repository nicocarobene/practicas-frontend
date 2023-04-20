import { useState } from "react"
import result from './mocks/result.json'
import nonresult from './mocks/nonresult.json'

export default function useMovie ({search}) {
  const { responseMovie, setResponseMovie }= useState([])
  
  const result = result.Search
  const hasMovie = movies?.length > 0
  const mappedMovies = movies?.map(pelis => ({
    id: pelis.imdbID,
    title: pelis.Title,
    year: pelis.Year,
    poster: pelis.Poster
  }))

  const getMovie=()=>{
    if(search){
      setResponseMovie(result)
    }
    else{
      setResponseMovie(nonresult)
    }
  }
  return { mappedMovies }
}
