import React from 'react'
import useStarredShows from '../lib/useStarredShows'

const Starred = () => {
  // here we dont require dispatchShows
  const [starredShows]=useStarredShows()
  return (
    <div>
        Starred  Page {starredShows.length}
    </div>
  )
}

export default Starred
