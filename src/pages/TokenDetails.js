import React from 'react'
import TokenChart from '../components/token-details/TokenChart'
import TokenHeading from '../components/token-details/TokenHeading'
import TokenStats from '../components/token-details/TokenStats'
import { useParams } from 'react-router-dom'

const TokenDetails = () => {
    const params = useParams();

    console.log(params.tokenDetails);


  return (
    <div className='w-11/12 mx-auto mt-4'>
        {/* Token Heading and Price */}
        <TokenHeading />

        {/* Token Data Chart */}
        <TokenChart />

        {/* Token General Stats */}
        <TokenStats />
    </div>
  )
}

export default TokenDetails