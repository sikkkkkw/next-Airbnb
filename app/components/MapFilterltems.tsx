"use client";

import Link from "next/link";
import { categoryItems } from "../lib/categoryltems";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export function Mapfilterltems(){
    const searchParams =useSearchParams();
    const search = searchParams.get("filter");
    return(
        <div className=" flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
            {categoryItems.map((item) =>(   
                <Link key={item.id} href="">
                    <div className=" relative w-6 h-6">
                        <Image src={item.imageUrl}
                        alt="Category image"
                        className="w-6 h-6"
                        width={24}
                        height={24}/>
                    </div>
                    <p className="text-xs font-medium">{item.title}</p>
                </Link>
            ))}
        </div>
    )
} 