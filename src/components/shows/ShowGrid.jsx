import { useReducer,useEffect} from 'react'
import useStarredShows from '../../lib/useStarredShows.js'
import ShowCard from './ShowCard'

const ShowGrid = ({apiData}) => {
  const [starredShows,dispatchStarred]=useStarredShows()
  console.log({starredShows})
  const onStarMeClick=(showId)=>{
        const isStarred =starredShows.includes(showId)
        if(isStarred)
        {
          dispatchStarred({type:'UNSTAR',showId})
        }
        else{
          dispatchStarred({type:'STAR',showId})
        }
  }
  return (
    <div>
         {apiData.map((data)=>(
            <ShowCard key={data.show.id} name={data.show.name }
                image={data.show.image? data.show.image.medium:'/not-found-image.png'}
                id={data.show.id}
                summary={data.show.summary}
                onStarMeClick={onStarMeClick}
                isStarred={starredShows.includes(data.show.id)}
            />
         ))}
    </div>
  )
}

export default ShowGrid
