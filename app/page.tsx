import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mapfilterltems } from "./components/MapFilterltems";
import prisma from "./lib/db";
import { ListingCard } from "./components/ListingCard";

async function getData() {
  const data = await prisma.home.findMany({
    where:{
      addedCategory:true,
      addedDescription:true,
      addedLoaction:true,
    },
    select:{
      photo:true,
      id:true,
      price:true,
      description:true,
      conutry:true
    }
  })
  return data;
}

export default async function Home() {
  const data = await getData()
  return (
    <div className=" container mx-auto px-5 lg:px-10">
      <Mapfilterltems />
      
      <div>
        {data.map((item)=>(
          <ListingCard key={item.id} description={item.description as string} imagePath={item.photo as string} location={item.conutry as string} price={item.price as number}/>
        ))}
      </div>
    </div>
  );
}
