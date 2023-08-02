import React from 'react'

const ShowsMainData = ({image,name,rating,summary,genres}) => {
   
    return (

    <div>
       <img src={image?image.original : '/not-found-image.png'} alt={name} />
       <div>
            <h1>{name}</h1>
            <div>{rating.average || 'N/A'}</div>
            <div dangerouslySetInnerHTML={{__html:summary}}/>
            {/* // with this we make react understand that we want to treat html as html */}
            <div>
            Genres:
               <div>
                  {genres.map((i)=>(
                    <span key={i}>{i} </span>
                  ))}
               </div>
            
            </div>
       </div> 

    </div>
  )
}

export default ShowsMainData
