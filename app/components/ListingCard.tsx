import { log } from "console";
import Image from "next/image";

interface iAppProps{
    imagePath:string;
    description:string;
    location: string;
    price:number;
}

export function ListingCard({description,imagePath,location,price}:iAppProps){
    console.log(imagePath);
    
    return(
        <div className="flex flex-col">
            {/* <div className=" relative h-72">
                <Image src={``} alt="Image of House" fill className=" rounded-lg h-full object-cover mb-3"/>

            </div> */}
        </div>
    )
}