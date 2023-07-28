import React from 'react'
import {Link} from 'react-router-dom'
const Navs = () => {
    const LINKS=[
        {
            text:"Home", 
            to:'/'
        },
        {
            text:"Starred", 
            to:'/starred'
        }
    ]
  return (
    <div>
        <ul>
            {LINKS.map((i)=>(
                <li key={i.to}>
                <Link to={i.to}>{i.text}</Link>
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default Navs
