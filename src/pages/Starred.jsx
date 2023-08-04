import React from 'react'
import useStarredShows from '../lib/useStarredShows'
import { useQuery } from '@tanstack/react-query'
import { getShowByIds } from '../api/tvmaze'
import ShowGrid from '../components/shows/ShowGrid'

const Starred = () => {
  // here we dont require dispatchShows
  const [starredShows]=useStarredShows()
  const {data:starred,error:starredError}=useQuery({
    queryKey:['starred',starredShows], 
    queryFn: ()=>getShowByIds(starredShows).then(result=>{
      result.map(show=>({show}))
    })

  })
  if(starred?.length > 0)// optional chaining
      {
        return <ShowGrid shows={starred}/>
      }
  if(starred?.length===0)
  {
    return <div>No shows were starred</div>
  }
  if(starredError)
  {
     return <div>Error occured: {starredError.message}</div>
  }
  return (
    <div>Shows are loading</div>
  )
}

export default Starred
