import React from 'react'
import { Outlet } from 'react-router'

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="container m-auto">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout