import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'



const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen max-h-screen relative'>
        <NavBar />
        <main>{children}</main>
        <SideBar />
    </div>
  )
}
export default Layout