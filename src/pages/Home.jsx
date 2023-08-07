import { useState,useReducer } from 'react'
import { searchForShow,searchForPeople } from '../api/tvmaze'
import SeachForm from '../components/SearchForm'
import ShowGrid from '../components/shows/ShowGrid'
import ActorGrid from '../components/actors/ActorGrid'
import { useQuery } from '@tanstack/react-query'
import styled,{css,ThemeProvider} from 'styled-components'
const Home = () => {
  const [filter,setFilter]=useState(null) ; 
  
  const {data:apiData,error:apiDataError}=useQuery({
    queryKey:['search',filter],
    queryFn:()=>
    filter.searchOptions==='shows'?searchForShow(filter.searchStr):searchForPeople(filter.searchStr)
    , 
    enabled:!!filter,// it means useQuery is enabled as long filter is empty or null 
  })
  const onSearch= async({searchStr,searchOptions})=>{
      setFilter({searchStr,searchOptions})

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