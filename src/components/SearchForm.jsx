import styled from 'styled-components'
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
              <SearchInput  type="text" placeholder='Search for something' value={searchStr} onChange={onSearchInputChange}/>
              <RadiosWrapper>
                <CustomRadio
                  label="Shows"
                  name="search-options" value="shows" checked={searchOptions==='shows'} onChange={onRadioChange} 
                />
                <CustomRadio label="Actors" 
                name="search-options" value="actors" checked={searchOptions==='actors'} onChange={onRadioChange}/>
              </RadiosWrapper>
              <SearchButtonWrapper>
                <button type="submit">Search</button>
              </SearchButtonWrapper>

            </form>
      
    </div>
  )
}

export default SeachForm

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;