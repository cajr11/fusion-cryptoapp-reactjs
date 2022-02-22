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
    <div className='w-40 md:w-52 h-full flex items-center justify-evenly'>
        <input type="radio" name="chain" value="Ethereum" className='hidden'/>
        <label for="ethereum" className={`${mainNetActive ? 'bg-gray-800' : ''} text-yellow-600 border w-1/2 text-center h-full flex items-center justify-center cursor-pointer`} onClick={mainNetActiveHandler}>Mainnet</label>

        <input type="radio" name="chain" value="BSC" className='hidden'/>
        <label for="BSC" className={`${testNetActive ? 'bg-gray-800' : ''} text-yellow-600 border w-1/2 text-center h-full flex items-center justify-center cursor-pointer`} onClick={testNetActiveHandler}>Testnet</label>
    </div>
  )
}

export default EthereumNetworks