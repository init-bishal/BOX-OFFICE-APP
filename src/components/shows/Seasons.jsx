import React from 'react'
const Seasons = ({seasons}) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>
      <p>Episodes in total: { !!seasons.episodeOrder?seasons.reduce((i,j)=>i+j.episodeOrder,0):'N/A'}</p> 
      <div>{
        seasons.map((i)=>(
            <div key={i.id}>
               <p>Season: {i.number}</p>
               <p>Episodes: {i.episodeOrder}</p>
               <div>
                  Aired: {!!i.premiereDate && !!i.endDate ?'N/A':i.premiereDate - i.endDate}
               </div>
            </div>          
        ))
      }</div>    
    </div>
  )
}

export default Seasons
