import React from 'react'
import ShowCard from './ShowCard'

const ShowGrid = ({apiData}) => {
  return (
    <div>
         {apiData.map((data)=>(
            <ShowCard key={data.show.id} name={data.show.name }
                image={data.show.image? data.show.image.medium:'/not-found-image.png'}
                id={data.show.id}
                summary={data.show.summary}
            />
         ))}
    </div>
  )
}

export default ShowGrid
