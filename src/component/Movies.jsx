import useMovie from '../hook/useMovie'

export default function RenderMovies ({ movies }) {
  const { mappedMovies } = useMovie({ movies })

  return (
            <ul className='movies'>
              {
                mappedMovies.map(peli => (
                  <li key={peli.id} className='movie'>
                    <h3>{peli.title}</h3>
                    <p>{peli.year}</p>
                    <img src={peli.poster} alt={peli.title} />
                  </li>
                ))
              }
  </ul>
  )
}
