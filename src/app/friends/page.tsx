import React from 'react'
import Container from '@/components/container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";

function page() {
  return (
    <Container>
      <div className='flex flex-1 flex-col h-full p-4 place-items-center'>
        <Card className='w-1/4 flex m-3'>
            <Avatar className="w-3/12 h-3/12 mx-5 mb-3 mt-3">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/49080195?v=4"
                alt="@tekashi"
              />
              <AvatarFallback>Tekashi</AvatarFallback>
            </Avatar>
            <div>
            <h6 className='text-left text-lg m-1'>Tekashi</h6>
            <p className='text-left text-sm m-1'>1 firend</p>
            <Button className='justify-start m-2' variant='secondary'>Friends</Button>
          </div>
        </Card>
        <Separator orientation='vertical'/>
        <Card className='w-1/4 flex'>
            <Avatar className="w-3/12 h-3/12 mx-5 mb-3 mt-3">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/49080195?v=4"
                alt="@tekashi"
              />
              <AvatarFallback>Tekashi</AvatarFallback>
            </Avatar>
            <div>
            <h6 className='text-left text-lg m-1'>Tekashi</h6>
            <p className='text-left text-sm m-1'>1 firend</p>
            <Button className='justify-start m-2' variant='secondary'>Friends</Button>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default page
