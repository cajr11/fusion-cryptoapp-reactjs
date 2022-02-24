import React from 'react';
import ReactDOM from "react-dom";

const Modal = ({ txs, onCloseModal }) => {


    return (
        <div className={`${txs ? "" : "hidden"} z-20 absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center`} onClick={onCloseModal} >
            <div className='z-30 border border-gray-600 w-11/12 h-52 bg-neutral-900 rounded-md flex justify-center items-center md:w-80'>
                <div className='h-3/6 flex flex-col justify-between items-center'>
                    <h1 className='text-stone-300 text-xs text-center font-bold'>Transaction Successful</h1>
                    <button className='h-14 w-28 rounded-md bg-black text-stone-300'>Close</button>
                </div>
            </div>
        </div>
    )
}


const SuccessModal = ({ txs, onCloseModal }) => {
  return (
    <>
        {ReactDOM.createPortal(<Modal onCloseModal={onCloseModal}  txs={txs} />, document.getElementById('modal-root'))}
    </>
  )
}

export default SuccessModal;