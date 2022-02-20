import React, { useEffect, useState} from 'react';
import CarouselItem from './CarouselItem';
import Carousel from "react-elastic-carousel"
import { Rings } from 'react-loader-spinner';

const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const CarouselTopTen = () => {
  const [topCoins, setTopCoins] = useState(null);

  useEffect(() => {
    const getCoins = async () => {
      const res = await fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API_KEY
        }
      })
      const data = await res.json();
      setTopCoins(await data.data.coins)
    }
    getCoins();
  },[])

  const breakPoints = [
    { width: 200, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
  ];

  return (
    <Carousel className='h-full w-full' breakPoints={breakPoints} enableMouseSwipe={true}>
      {!topCoins && <Rings color="rgb(217, 119, 6)" height={200} width={200}/>}
      {topCoins && topCoins.map((coin) => (
        <CarouselItem key={coin.uuid} name={coin.name} symbol={coin.iconUrl} change={coin.change} price={coin.price} />
      ))}
    </Carousel>
  )
}

export default CarouselTopTen;