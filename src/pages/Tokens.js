import React, { useState, useEffect } from 'react';
import TokensHeadings from '../components/tokens/TokensHeadings';
import TokensListItem from '../components/tokens/TokensListItem';
import { Rings } from 'react-loader-spinner';
import TokensPagination from '../components/tokens/TokensPagination';

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const Tokens = () => {
    const [tokensLoaded, setTokensLoaded] = useState(null);
    const [isAscending, setIsAscending] = useState(false);
    const [page, setPage] = useState(1);

    const sortData = (val) => {
        setIsAscending(val);
    }

    const chosenPageHandler = (val) => {
        setPage(val)
    }


    useEffect(() => {
        const getTokens = async () => {
            const res = await fetch(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50${page === 2 ? "&offset=50" : ""}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": RAPID_API_KEY
                }
            })

            const data = await res.json();
            console.log(await data);
            setTokensLoaded(await data.data.coins);
        }
        getTokens();
    }, [page])

  return (
    <div className='w-11/12 tokens-page-height md:token-container-medium mx-auto mt-2'>
        <h1 className='text-stone-300 font-bold text-xl text-center underline underline-offset-8'>Top 100 Cryptocurrencies</h1>
        <div className='border border-gray-600 mt-4 token-container rounded-md bg-neutral-900 overflow-y-scroll relative'>

            {/* Column headinds */}
            <TokensHeadings sort={sortData} />

            {/* Token list items container */}
            <div className='absolute top-14 w-full'>
                {!tokensLoaded && (
                <div className='w-full h-full flex items-center justify-center'>
                    <Rings color="rgb(217, 119, 6)" height={200} width={200}/>
                </div>)}
                
                    {/* List items ascending or descending */}
                {tokensLoaded && !isAscending && tokensLoaded.map(token => <TokensListItem key={token.uuid} name={token.name} volume={token["24hVolume"]} rank={token.rank} icon={token.iconUrl} price={token.price} market={token.marketCap} change={token.change} symbol={token.symbol} path={token.uuid}/> )}

                {tokensLoaded && isAscending && tokensLoaded.map(token => <TokensListItem key={token.uuid} name={token.name} volume={token["24hVolume"]} rank={token.rank} icon={token.iconUrl} price={token.price} market={token.marketCap} change={token.change} symbol={token.symbol} path={token.uuid} /> ).reverse()}
            </div>
        </div>

         {/* Pagination Buttons */}
         <TokensPagination onPageChosen={chosenPageHandler} />
    </div>
  )
}

export default Tokens