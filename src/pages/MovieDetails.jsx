import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
 const params = useParams();
  return (

    <div>MovieDetails {params.id}</div>
  )
}

export default MovieDetails