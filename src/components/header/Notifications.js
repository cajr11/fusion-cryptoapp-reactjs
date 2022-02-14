import React from 'react'
import HeaderButton from '../UI/HeaderButton'

const Notifications = ({ icon }) => {
  return (
    <HeaderButton notification={true}>{icon}</HeaderButton>
  )
}

export default Notifications