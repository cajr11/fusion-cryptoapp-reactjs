import React, { useState, useEffect } from 'react';
import TokensHeadings from '../components/tokens/TokensHeadings';
import TokensListItem from '../components/tokens/TokensListItem';

const Tokens = () => {
    const [tokensLoaded, setTokensLoaded] = useState(null);

    useEffect(() => {
        const getTokens = async () => {
            const res = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": "1e8b3b2d07msh1f91842ecc87f34p1352cejsna4f3846d2722"
                }
            })

            const data = await res.json();
            console.log(await data);
            setTokensLoaded(await data.data.coins);
        }
        getTokens();
    }, [])

  return (
    <div className='w-11/12 mx-auto mt-2'>
        <h1 className='text-stone-300 font-bold text-xl text-center underline underline-offset-8'>Top 100 Cryptocurrencies</h1>
        <div className='border border-gray-600 mt-4 token-container rounded-md bg-neutral-900 overflow-y-scroll'>
            <TokensHeadings />
            {tokensLoaded && tokensLoaded.map(token => <TokensListItem key={token.uuid} name={token.name} volume={token["24hVolume"]} rank={token.rank} icon={token.iconUrl} price={token.price} market={token.marketCap} change={token.change} symbol={token.symbol} /> )}
        </div>
    </div>
  )
}

export default Tokens