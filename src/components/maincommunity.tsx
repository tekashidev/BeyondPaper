import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "sonner"
import { Separator } from "@/components/ui/separator"


function Maincommunity() {
  return (
    <div className='flex'>
      <h1>Community</h1>
      <Separator />
      <div>
      <Card>
        <CardHeader className=''>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardHeader>User Rated a book 5/5</CardHeader>
        </CardHeader>
        <CardContent className=''>
          <Image
            src="/book-cover/Diuna-Cover.jpg"
            width={140}
            height={180}
            alt='Image'
          />
          <p>Diuna</p>
          <p>Frank Herbert</p>
          {/* <Button
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
          >
      Want to Read
    </Button> */}
        </CardContent>
        <CardDescription>
          <Separator />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </CardDescription>
      </Card>
      </div>
    </div>
  )
}

export default Maincommunity
