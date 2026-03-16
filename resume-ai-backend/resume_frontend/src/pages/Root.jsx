import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/navbar'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <div>
      <Toaster position="top-center" />
      {/* {navbar} */}
      <Navbar />
      {/* {outlet} */}
      <Outlet />
    </div>

  )
}
export default Root