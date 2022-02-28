import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchedCoin, setSearchedCoin] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [coinUuid, setCoinUuid] = useState("");
  const [newUuid, setNewUuid] = useState("")

  const searchResultHandler = async (e) => {
      if(e.key === "Enter"){
        setSearchedCoin(searchRef.current.value);
        const getCoin = async () => {
          const res = await fetch(`https://coinranking1.p.rapidapi.com/search-suggestions?referenceCurrencyUuid=yhjMzLPhuIDl&query=${searchedCoin}`, {
                  "method": "GET",
                  "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": "1e8b3b2d07msh1f91842ecc87f34p1352cejsna4f3846d2722"
                  }
                })
          const data = await res.json();
          navigate(`tokens/${ await data.data.coins[0].uuid}`)
          // await data.data.coins[0].uuid);
          // // if(await newUuid && coinUuid !== newUuid){
          // //   navigate(`tokens/${newUuid}`)
          // //   setCoinUuid(newUuid)
          // //   setNewUuid("")
          // //   setCoinUuid("");
          // // }
          searchRef.current.value = "";
      }
      getCoin();
    }
  }

  return (
    <input type="text" className='w-full h-full pl-2 bg-stone-300 rounded-md placeholder-black text-black focus:outline-none' placeholder='Search' onKeyDown={searchResultHandler} ref={searchRef}/>
  )
}

export default SearchBar