import React from 'react'
import Header from './Header'
import SideBar from './SideBar'



const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen max-h-screen max-w-7xl mx-auto relative'>
        <Header />
        <main>{children}</main>
        <SideBar />
    </div>
  )
}
export default Layout