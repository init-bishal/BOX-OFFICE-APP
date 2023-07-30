import { useState } from 'react'
import { searchForShow,searchForPeople } from '../api/tvmaze'
const Home = () => {
  const [searchStr,setSearchStr]=useState("")
  const [apiData,setApiData]=useState(null)
  const [apiDataError,setApiDataError]=useState(null)
  const [searchOptions,setSearchOptions]=useState('shows')
  const onSearchInputChange=(event)=>{
    setSearchStr(event.target.value )
  }
  const onSearch= async(event)=>{
    try{
      setApiDataError(null)
      event.preventDefault()
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
      return searchOptions==='shows' ? apiData.map((data)=>(
        <div key={data.show.id}>{data.show.name}</div>
      )):
      apiData.map((data)=>(
        <div key={data.person.id}>{data.person.name}</div>
      ))
    }
    return null
  }
  const onRadioChange=(event)=>{
    setSearchOptions(event.target.value)

  }
  return (
    <div>
          <form onSubmit={onSearch}>
            <input type="text" value={searchStr} onChange={onSearchInputChange}/>
             <label>
              Shows
              <input type="radio" name="search-options" value="shows" checked={searchOptions==='shows'} onChange={onRadioChange} />
             </label>
             <label>
              Actors
              <input type="radio" name="search-options" value="actors" checked={searchOptions==='actors'} onChange={onRadioChange} />
             </label>
            <button type="submit">Search</button>

          </form>
          <div>
            {renderApiData()}
          </div>
        
    </div>
  )
}

export default Home