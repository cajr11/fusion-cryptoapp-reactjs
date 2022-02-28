import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchedCoin, setSearchedCoin] = useState("");
    const searchRef = useRef(null);
    const navigate = useNavigate();
    const [initialSearch, setInitialSearch] = useState(0)


    const searchResultHandler = (e) => {
      if(e.key === "Enter"){
        setSearchedCoin(searchRef.current.value);
        setInitialSearch(1)
      }

    }
    
    useEffect(() => {
      const getCoin = async () => {
        const res =  await fetch(`https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${searchedCoin}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "1e8b3b2d07msh1f91842ecc87f34p1352cejsna4f3846d2722"
          }
        })
        const data = await res.json();
        console.log(await data);

        navigate(`tokens/${await data.data.coins[0].uuid}`);

        // if (data.data.coins[0].uuid){
        //   navigate(`tokens/${await data.data.coins[0].uuid}`);
        // }

        searchRef.current.value = "";
      }
      
      if (initialSearch > 0){
        getCoin();
      }

      return () => {
        setInitialSearch(0)
      }

    }, [searchedCoin, navigate, initialSearch])

  return (
    <input type="text" className='w-full h-full pl-2 bg-stone-300 rounded-md placeholder-black text-black focus:outline-none' placeholder='Search' onKeyDown={searchResultHandler} ref={searchRef}/>
  )
}

export default SearchBar