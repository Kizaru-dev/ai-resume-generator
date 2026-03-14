import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'

const Root = () => {
  return (
    <div>
      {/* {navbar} */}
      <Navbar />
      {/* {outlet} */}
      <Outlet />
    </div>

  )
}
export default Root