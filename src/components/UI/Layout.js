import React from 'react'
import Header from './Header'
import SideBar from './SideBar'



const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen overflow-y-scroll max-w-7xl mx-auto relative'>
        <Header />
        <main className='overflow-x-hidden mb-28 md:mb-0 md:nav-md mt-20 md:mt-0 md:ml-44'>{children}</main>
        <SideBar />
    </div>
  )
}
export default Layout