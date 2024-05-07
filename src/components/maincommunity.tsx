import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/container";
import CurrentlyReading from "./currently";
import FriendsReading from "./friends-reading";


function Maincommunity() {
  return (
    <Container>
    <div className="flex flex-1 h-full">
      <CurrentlyReading/>
      <Separator orientation="vertical" />
    </div>
    <div className="flex flex-[3] flex-col gap-3 place-content-center	justify-center place-items-center">
    <h1 className="text-center text-4xl tracking-wider font-bold">Community</h1>
    <Separator/>
      <div className="flex flex-col w-1/2 text-center p-5 m-5">
        <Card>
          <CardHeader className="place-content-center	justify-center place-items-center pt-3">
            <div className="flex flex-row place-content-center	justify-center place-items-center p-3">
              <Avatar className="mx-5">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/49080195?v=4"
                  alt="@tekashi"
                />
                <AvatarFallback>Tekashi</AvatarFallback>
              </Avatar>
              <p className="">User Nick</p>
            </div>
          <h6>User Rated a book 5/5</h6>
          </CardHeader>
          <div className="flex flex-col place-content-center	justify-center place-items-center text-center m-5">
          <CardContent className="place-content-center	justify-center place-items-center p-3">
            <Image
              className="pb-6"
              src="/book-cover/Diuna-Cover.jpg"
              width={140}
              height={180}
              alt="Image"
            />
            <p>Diuna</p>
            <p>Frank Herbert</p>
          </CardContent>
          <CardDescription className="place-content-center	justify-center place-items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra
            odio ut elit ullamcorper, vitae ultrices magna bibendum.
            Pellentesque faucibus mattis lorem, quis laoreet lorem placerat
            fringilla. Curabitur convallis vel urna vitae consequat. Sed urna
            purus, aliquet id auctor nec, venenatis vitae erat. Nam congue
            congue magna quis malesuada. Fusce at nibh augue. Nunc molestie
            mattis sollicitudin. Vivamus dapibus pharetra viverra. Praesent
            convallis placerat risus, vitae laoreet lectus fermentum nec.
          </CardDescription>
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
      Show Toast
    </Button> */}
          </div>
        </Card>
      </div>
    </div>
    <div className="flex flex-1">
    <Separator className="my-4" orientation="vertical" />
      <FriendsReading/>
      </div>
    </Container>
  );
}

export default Maincommunity;
