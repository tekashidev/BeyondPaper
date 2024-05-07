import React from 'react'
import Image from "next/image";

function FriendsReading() {
  return (
    <div>
      <h3 className='text-left'>FIRENDS</h3>
      <div className="flex text-left px-5 m-5 w-auto">
         <Image
              className='mx-5'
              src="/book-cover/Diuna-Cover.jpg"
              width={70}
              height={90}
              alt="Image"
            />
            <div className='text-sm place-items-start'>
            <p>Ania reading</p>
            <p>Diuna</p>
            <p>Frank Herbert</p>
            <p className='text-xs'>0/500 (0%)</p>
            </div>
      </div>
    </div>
  )
}

export default FriendsReading
