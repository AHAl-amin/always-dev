import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className='max-w-6xl  mx-auto'>

        <Outlet></Outlet>
    </div>
  )
}

export default Main