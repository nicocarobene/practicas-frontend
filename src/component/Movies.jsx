import nonresult from '../mocks/nonresult.json'
export default function RenderMovies ({ mappedMovies, errorMovies }) {
  const hasMovie = mappedMovies?.length > 0
  return (
    <ul className='movies'>
      {hasMovie
        ? (
            mappedMovies.map((peli) => (
              <li key={peli.id} className='movie'>
                <h3>{peli.title}</h3>
                <p>{peli.year}</p>
                <img src={peli.poster} alt={peli.title} />
              </li>
            ))
          )
        : (
          <h2>{nonresult.Error}</h2>
          )}
    </ul>
  )
}
