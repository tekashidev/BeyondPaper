import React from 'react'
import Container from '@/components/container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card"
import Image from "next/image";

function page() {
  return (
    <Container>
      <div className='flex flex-1 flex-col h-full p-4 place-items-center'>
        <h1 className='text-center text-5xl font-semibold tracking-wide'>Books</h1>
        <div className='flex mx-3'>
          <Card className='w-fit p-2 text-center m-3'>
            <h3 className='text-2xl'>Diuna</h3>
            <p className='text-base'>Frank Herbert</p>
            <Image
                  className="m-5"
                  src="/book-cover/Diuna-Cover.jpg"
                  width={140}
                  height={180}
                  alt="Image"
                />
            <p className='text-base pb-2'>Currently Reading</p>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default page
