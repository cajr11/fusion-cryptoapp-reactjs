import React, { useState, useEffect } from 'react'

const TokensPagination = ({ onPageChosen }) => {
    const [isActive, setIsActive] = useState("btn1");

    const isActiveHandler = (e) => {

        if (e.target.textContent === "1"){
            setIsActive("btn1")
        } else if (e.target.textContent === "2"){
            setIsActive("btn2")
        }
    }

    useEffect(() => {
        if (isActive === "btn1"){
            onPageChosen(1);
        } else if (isActive === "btn2"){
            onPageChosen(2)
        }
    }, [isActive, onPageChosen])

  return (
    <div className='w-full h-12 flex justify-center items-center mt-2'>

        <div className='w-48 flex items-center mt-1'>
            {/* Pagination buttons */}
            <button className={isActive === "btn1" ? 'border h-7 w-7 rounded-md border-gray-600 bg-neutral-900 text-stone-300 text-xs active:outline-none mr-1' : ' h-7 w-7 rounded-md bg-neutral-900 text-stone-300 border text-xs border-black mr-1'} onClick={isActiveHandler}>1</button>

            <button className={isActive === "btn2" ? 'border h-7 w-7 rounded-md border-gray-600 bg-neutral-900 text-stone-300 text-xs mr-1' : ' h-7 w-7 rounded-md bg-neutral-900 text-stone-300 text-xs mr-1'} onClick={isActiveHandler}>2</button>

             {/* List range text */}
             <div className='w-32'>
                <p className='w-full text-left text-sm text-stone-300'>
                    {isActive === "btn1" && "Showing 1 - 50"}
                    {isActive === "btn2" && "Showing 51 - 100"}
                </p>
            </div>

        </div>
       
    </div>
  )
}

export default TokensPagination