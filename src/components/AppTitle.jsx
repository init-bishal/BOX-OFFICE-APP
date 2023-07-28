import React from 'react'

const AppTitle = ({title="Box Office",subTitle="Are you looking for a movie or and actor"}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default AppTitle
