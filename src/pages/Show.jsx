import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getShowById } from '../api/tvmaze'
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
            <div>{showData.name}</div>
          )
        } 
  }
  return (
    <div>
        {renderShowData()}
        Show page for {showId}
    </div>
  )
}

export default Show
