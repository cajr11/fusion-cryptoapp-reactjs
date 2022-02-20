import React from 'react'
import TokenChart from '../components/token-details/TokenChart'
import TokenHeading from '../components/token-details/TokenHeading'

const TokenDetails = () => {
  return (
    <div className='w-11/12 mx-auto mt-2'>
        {/* Token heading and price */}
        <TokenHeading />

        {/* Token data chart */}
        <TokenChart />
    </div>
  )
}

export default TokenDetails