import React from 'react'
import ActorCard from './ActorCard'
const ActorGrid = ({apiData}) => {
  return (
    <div>
        {apiData.map((data)=>(
            <ActorCard 
              key={data.person.id}
              name={data.person.name}

              country={data.person.country?data.person.country.name:'Not known'}
              birthday={data.person.birthday}
              deathday={data.person.deathday}
              gender={data.person.gender}
              image={data.person.image? data.person.image.medium:'/not-found-image.png'}
              
            />
        ))}
    </div>
  )
}

export default ActorGrid
