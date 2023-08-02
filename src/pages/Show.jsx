import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getShowById } from '../api/tvmaze'
import ShowsMainData from '../components/shows/ShowsMainData'
import Details from '../components/shows/Details'
import Seasons from '../components/shows/Seasons'
import Cast from '../components/shows/Cast'
const Show = () => {
  const {showId}=useParams()
  //queryKey resemble dependency array in useEffect()
  const {data:showData,error:showError}=useQuery({queryKey:['show',showId],
                        queryFn:()=>getShowById(showId)
})
  const renderShowData=()=>{
        if(showError)
        {
          return (
            <div>Error occured: {showError.message}</div>
          )
        }
        if(showData)
        {
          return(
            <div>
              <ShowsMainData
                image={showData.image} 
                name={showData.name}
                rating={showData.rating} 
                summary={showData.summary}
                genres={showData.genres}
              />
              <div>
                  <h2>Details</h2>
                  <Details
                    network={showData.network}
                    status={showData.status}
                    premiered={showData.premiered}

                  />
              </div>
              <div>
                <h2>Seasons</h2>
                <Seasons seasons={showData._embedded.seasons} />
              </div>
              <div>
                <h2>Cast</h2>
                <Cast cast={showData._embedded.cast}/>
              </div>

            </div>
          )
        } 
  }
  return (
    <div>
        {renderShowData()}
        
    </div>
  )
}

export default Show
