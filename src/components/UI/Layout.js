import React from 'react'
import MainNavigation from './MainNavigation'


const Layout = ({ children }) => {
  return (
    <div className='w-screen h-screen max-h-screen relative'>
        <MainNavigation />
        <main>{children}</main>
    </div>
  )
}
export default Layout