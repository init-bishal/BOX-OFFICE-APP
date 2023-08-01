import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getShowById } from '../api/tvmaze'
const Show = () => {
  const {showId}=useParams()
  const [showData,setShowData]=useState("")
  const [showError,setShowError]=useState("")
  useEffect(()=>{
      async function fetchData(){
        try{
          const data=await getShowById(showId)
          console.log(data)
          setShowData(data)
        }
        catch(err)
        {
          setShowError(err)
        }
      }
      fetchData()
      
  },[showId])
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
