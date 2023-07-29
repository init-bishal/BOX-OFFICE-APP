import { useState } from 'react'
import { searchForShow } from '../api/tvmaze'
const Home = () => {
  const [searchStr,setSearchStr]=useState("")
  const [apiData,setApiData]=useState(null)
  const [apiDataError,setApiDataError]=useState(null)
  const onSearchInputChange=(event)=>{
    setSearchStr(event.target.value )
  }
  const onSearch= async(event)=>{
    try{
      setApiDataError(null)
      event.preventDefault()
      const result=await searchForShow(searchStr)
      setApiData(result)
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
      return apiData.map((data)=>(
        <div key={data.show.id}>{data.show.name}</div>
      ))
    }
    return null
  }
  return (
    <div>
          <form onSubmit={onSearch}>
            <input type="text" value={searchStr} onChange={onSearchInputChange}/>

            <button type="submit">Search</button>

          </form>
          <div>
            {renderApiData()}
          </div>
        
    </div>
  )
}

export default Home