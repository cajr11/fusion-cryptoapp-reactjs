import React, { useState } from 'react'

const BscNetworks = () => {
    const [mainNetActive, setMainNetActive] = useState(true);
    const [testNetActive, setTestNetActive] = useState(false);

    const mainNetActiveHandler = () => {
        setTestNetActive(false)
        setMainNetActive(true);
    }

    const testNetActiveHandler = () => {
        setMainNetActive(false);
        setTestNetActive(true)
    }

  return (
    <div className='w-40 md:w-52 h-full flex items-center justify-evenly border border-gray-600'>
        <input type="radio" name="chain" value="Ethereum" className='hidden'/>
        <label for="ethereum" className={`${mainNetActive ? 'bg-neutral-900' : ''} text-stone-300  w-1/2 text-center h-full flex items-center justify-center cursor-pointer`} onClick={mainNetActiveHandler}>Mainnet</label>

        <input type="radio" name="chain" value="BSC" className='hidden'/>
        <label for="BSC" className={`${testNetActive ? 'bg-neutral-900' : ''} text-stone-300  w-1/2 text-center h-full flex items-center justify-center cursor-pointer`} onClick={testNetActiveHandler}>Testnet</label>
    </div>
  )
}

export default BscNetworks