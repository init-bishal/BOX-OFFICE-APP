import React from 'react'
import { useState} from 'react'
import useSeachStr from '../lib/useSeachStr'
import CustomRadio from './CustomRadio'
const SeachForm = ({onSearch}) => 
{
      const [searchStr,setSearchStr]=useSeachStr()
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
              <CustomRadio
                label="Shows"
                name="search-options" value="shows" checked={searchOptions==='shows'} onChange={onRadioChange} 
              />
              <CustomRadio label="Actors" name="search-options" value="actors" checked={searchOptions==='actors'} onChange={onRadioChange}/>
              <button type="submit">Search</button>

            </form>
      
    </div>
  )
}

export default SeachForm
