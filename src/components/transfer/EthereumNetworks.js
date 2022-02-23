import React,{ useState } from 'react'

const EthereumNetworks = () => {
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
    <div className='w-40 md:w-52 h-full flex items-center justify-evenly border-2 border-gray-600 rounded-md'>
        <input type="radio" name="chain" value="Ethereum" className='hidden'/>
        <label htmlFor="ethereum" className={`${mainNetActive ? 'bg-neutral-900' : ''} text-stone-300 w-1/2 text-center h-full rounded-md flex items-center justify-center cursor-pointer text-sm`} onClick={mainNetActiveHandler}>Mainnet</label>

        <input type="radio" name="chain" value="BSC" className='hidden'/>
        <label htmlFor="BSC" className={`${testNetActive ? 'bg-neutral-900' : ''} text-stone-300 w-1/2 text-center h-full rounded-md flex items-center justify-center cursor-pointer text-sm`} onClick={testNetActiveHandler}>Testnet</label>
    </div>
  )
}

export default EthereumNetworks