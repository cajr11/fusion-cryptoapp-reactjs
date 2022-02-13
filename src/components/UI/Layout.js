import React from 'react'
import MainNavigation from './MainNavigation'


const Layout = ({ children }) => {
  return (
    <div className='mobile-card mt-2 mx-auto border-2 border-black rounded-lg relative'>
        <MainNavigation />
        <main>{children}</main>
    </div>
  )
}
export default Layout