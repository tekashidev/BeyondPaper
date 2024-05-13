import React from 'react'
import Container from '@/components/container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image";

function Profile() {
  return (
    <Container>
      <div className='flex flex-1 flex-col h-full gap-3'>
        <Card className='p-5 '>
        <div className='justify-center place-items-center'>
            <Avatar className='w-6/12 h-6/12'>
              <AvatarImage 
                src="https://avatars.githubusercontent.com/u/49080195?v=4"
                alt="@tekashi"
              />
              <AvatarFallback>Tekashi</AvatarFallback>
            </Avatar> 
        </div>
        <div>
          <h3 className='text-2xl font-bold m-2'>tekashi</h3>
          <p className='text-base m-1'>tekashidev</p>
          <p className='text-sm m-1'>Currently Reading: Diuna</p>
          <div className='flex w-max place-content-center justify-center place-items-center m-5'>
            <Button className="py-1.5" variant="outline">Follow</Button>
            <Button className="py-1.5" variant="secondary">Invite</Button>
          </div>
          <div className='flex p-1'>
            <p className='px-2'>1 followers</p>
            <p className='px-2'>1 following</p>
          </div>
        </div>
      </Card>
      </div>
      <Separator className="mx-6" orientation="vertical" />
      <div className='flex flex-[2] h-ful w-max h-fit'>
        <Card className='p-3'>
          <div>
            <h1 className='text-4xl font-medium tracking-wide p-2'>Diuna</h1>
            <div className='flex flex-row'>
            <Image
                className="m-5"
                src="/book-cover/Diuna-Cover.jpg"
                width={140}
                height={180}
                alt="Image"
              />
              <div>
                <p className='text-left text-base p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Button variant="outline">Want to Read</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  )
}

export default Profile
