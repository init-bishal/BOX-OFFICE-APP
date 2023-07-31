import { useState } from 'react'
import { searchForShow,searchForPeople } from '../api/tvmaze'
import SeachForm from '../components/SearchForm'
import ShowGrid from '../components/shows/ShowGrid'
import ActorGrid from '../components/actors/ActorGrid'
const Home = () => {
  
  const [apiData,setApiData]=useState(null)
  const [apiDataError,setApiDataError]=useState(null)
  
  const onSearch= async({searchStr,searchOptions})=>{
    try{
      setApiDataError(null)
      
      if(searchOptions==='shows')
      {
        const result=await searchForShow(searchStr)
        setApiData(result)
        console.log(result)
      }
      else
      {
        const result=await searchForPeople(searchStr)
        setApiData(result)
        console.log(result)
      }
    }
    catch(err)
    {
      setApiDataError(err)
    }

  }
  const renderApiData=()=>{
    if(apiDataError)
    {
      return <div>Error occured: {apiDataError.message}</div>
    }
    // for no results of empty array 
    if(apiData?.length===0)
    {
      return <div>No results</div>
    }
    if(apiData){
      return apiData[0].show ? 
      <ShowGrid apiData={apiData}/>:<ActorGrid apiData={apiData}/>
    }
    return null
  }
  
  return (
    <div>
          <SeachForm onSearch={onSearch}/>
          
          <div>
            {renderApiData()}
          </div>
        
    </div>
  )
}

export default Home