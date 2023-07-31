const BASE_URL='https://api.tvmaze.com'
const apiGet= async (queryString)=>
{
  const response=await fetch(`${BASE_URL}${queryString}`)
  const body=response.json()
  console.log("fetching")
  console.log(body)
  
  return body
}
export const searchForShow=(query)=>apiGet(`/search/shows?q=${query}`)
export const searchForPeople=(query)=>apiGet(`/search/people?q=${query}`)