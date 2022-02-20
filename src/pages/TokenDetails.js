import React, { useEffect, useState } from 'react'
import TokenChart from '../components/token-details/TokenChart'
import TokenHeading from '../components/token-details/TokenHeading'
import TokenStats from '../components/token-details/TokenStats'
import { useParams } from 'react-router-dom';


const TokenDetails = () => {
    const params = useParams();
    console.log(params);
    const [tokenData, setTokenData] = useState(null)

    useEffect(() => {
        const getCoinData = async () => {
          const res = await fetch(`https://coinranking1.p.rapidapi.com/coin/${params.tokenDetails}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "coinranking1.p.rapidapi.com",
              "x-rapidapi-key": "1e8b3b2d07msh1f91842ecc87f34p1352cejsna4f3846d2722"
            }
          })

          const data = await res.json();
          setTokenData(await data.data.coin);
          console.log(await data.data.coin);
        }
        getCoinData();
    },[params.tokenDetails])


  return (
    <div className='w-11/12 relative mx-auto mt-4'>
        {/* Token Heading and Price */}
        {tokenData && <TokenHeading price={tokenData.price} change={tokenData.change} icon={tokenData.iconUrl} name={tokenData.name} symbol={tokenData.symbol}/>}

        {/* Token Data Chart */}
        {tokenData && <TokenChart uuid={params} name={tokenData.name} />}

        {/* Token General Stats */}
        {tokenData && <TokenStats market={tokenData.marketCap} btcPrice={tokenData.btcPrice} volume={tokenData["24hVolume"]} rank={tokenData.rank} website={tokenData.websiteUrl} whitepaper={tokenData.links[1].url} />}
    </div>
  )
}

export default TokenDetails