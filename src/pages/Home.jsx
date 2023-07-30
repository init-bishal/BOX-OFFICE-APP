import { useState } from 'react'
import { searchForShow,searchForPeople } from '../api/tvmaze'
import SeachForm from '../components/SeachForm'
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
      }
      else
      {
        const result=await searchForPeople(searchStr)
        setApiData(result)
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
    if(apiData){
      return apiData[0].show ? apiData.map((data)=>(
        <div key={data.show.id}>{data.show.name}</div>
      )):
      apiData.map((data)=>(
        <div key={data.person.id}>{data.person.name}</div>
      ))
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