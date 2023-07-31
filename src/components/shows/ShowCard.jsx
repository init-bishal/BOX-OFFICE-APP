import React from 'react'
import {Link} from 'react-router-dom'
// import {notfound} from '../../../public/'
const ShowCard = ({name,image,id,summary}) => {
    const summaryStripper=summary?summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,'')
    :'No description'
  return (
    <div>
       <div>
       <img src={image} alt={name}/>
       </div>

       <h1>{name}</h1>
        <p>{summaryStripper}...</p>
       <div>
        <Link to='/'>Read more </Link>
        <button type='button'>Star me</button>
       </div>
    </div>
  )
}

export default ShowCard
