import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>
        <Link to="/starred">Go to Starred Page</Link>
        </h1>
    </div>
  )
}

export default Home
