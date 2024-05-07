import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button"

function CurrentlyReading() {
  return (
    <div>
      <h3 className='text-center'>CURRENTLY READING</h3>
      <div className="flex place-content-center	justify-center place-items-center text-left px-5 m-5 w-auto">
         <Image
              className='mx-5'
              src="/book-cover/Diuna-Cover.jpg"
              width={70}
              height={90}
              alt="Image"
            />
            <div className='text-sm'>
            <p>Diuna</p>
            <p>Frank Herbert</p>
            <p className='text-xs'>0/500 (0%)</p>
            <Button variant="outline">Update</Button>
            </div>
      </div>
    </div>
  )
}

export default CurrentlyReading
