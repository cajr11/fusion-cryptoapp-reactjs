import React from 'react';
import ReactDOM from "react-dom";

const Modal = ({ err, onCloseModal }) => {


    return (
        <div className={`${err ? "" : "hidden"} z-20 absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center`} onClick={onCloseModal} >
            <div className='z-30 border border-gray-600 w-11/12 h-52 bg-neutral-900 rounded-md flex justify-center items-center md:w-80'>
                <div className='h-3/6 flex flex-col justify-between'>
                    <h1 className='text-stone-300 font-bold'>{err.message}</h1>
                    <button className='h-14 w-28 mx-auto rounded-md bg-black text-stone-300'>Close</button>
                </div>
            </div>
        </div>
    )
}


const ErrorModal = ({ err, onCloseModal }) => {
  return (
    <>
        {ReactDOM.createPortal(<Modal onCloseModal={onCloseModal} err={err} />, document.getElementById('modal-root'))}
    </>
  )
}

export default ErrorModal;