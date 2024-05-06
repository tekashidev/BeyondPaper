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

function Maincommunity() {
  return (
    <div className="flex-wrap">
      <h1>Community</h1>
      <Separator />
      <div className="grid grid-cols-1 grid-rows-1 gap-1.5 place-content-center	justify-center place-items-center">
        <Card>
          <CardHeader className="place-content-center	justify-center place-items-center">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/49080195?v=4"
                alt="@tekashi"
              />
              <AvatarFallback>Tekashi</AvatarFallback>
            </Avatar>
            <CardHeader>User Rated a book 5/5</CardHeader>
          </CardHeader>
          <CardContent className="place-content-center	justify-center place-items-center">
            <Image
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
        </Card>
      </div>
    </div>
  );
}

export default Maincommunity;
