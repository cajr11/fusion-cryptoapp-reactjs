import React, { useState } from 'react';

const HeaderButton = ({ children, notification }) => {
    const [newNotifications, setNewNotifications] = useState(notification ? notification : false);


    const viewNotificationHandler = () => {
        setNewNotifications(false)
    }

    return (
        <div className='relative'>
            <button className='text-stone-300 h-12 w-12 border border-white flex items-center justify-center rounded-full' onClick={viewNotificationHandler}>
                {children}
            </button>
           {newNotifications &&  <span className='absolute h-2 w-2 bg-red-600 top-1 right-1 rounded-full'></span>}
        </div>
    )
}

export default HeaderButton