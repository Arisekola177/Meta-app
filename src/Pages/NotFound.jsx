import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <p>Sorry!!</p>
        <h1>Page cannot be found</h1>
        <Link to='/'>Back to Homapeage</Link>
    </div>
  )
}

export default NotFound