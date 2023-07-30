import React from 'react'
import { useState } from 'react'
const SeachForm = ({onSearch}) => 
{
      const [searchStr,setSearchStr]=useState("")
      const [searchOptions,setSearchOptions]=useState('shows')
      const onSearchInputChange=(event)=>
      {
          setSearchStr(event.target.value )
      }
      const onRadioChange=(event)=>
      {
          setSearchOptions(event.target.value)

      }
      const onSubmit=(event)=>{
            event.preventDefault()
            const options={
              searchStr:searchStr, 
              searchOptions:searchOptions
            }
            onSearch(options)

      }
  return (
    <div>
       <form onSubmit={onSubmit}>
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
      
    </div>
  )
}

export default SeachForm
