import React from 'react'
import {Outlet} from 'react-router-dom'
import Navs from './Navs'
import AppTitle from './AppTitle'
const MainLayout = () => {
  return (
    <div>
        <AppTitle/>
        <Navs/>
        <Outlet/>
        This is MainLayout
    </div>
  )
}

export default MainLayout
