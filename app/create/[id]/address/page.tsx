"use client"

import { createLocation } from "@/app/actions";
import { CreatioBottomBar } from "@/app/components/CreationBottomBer";
import { useCountries } from "@/app/lib/getCountries";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useState } from "react";


export default function AddressRoutw({params}:{params:{id:string}}){
    const {getAllCountries } = useCountries();
    const [locationValue, setLocationValue]= useState("");

    const LazyMap =dynamic(() => import('@/app/components/Map'),{
        ssr: false,
        loading: ()=> <Skeleton className="h-[50vh] w-full "/>
    })

    return(
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">
                    Where is your Home located?
                </h2>
            </div>
            <form action={createLocation}>
                <input  type="hidden" name="homeId" value={params.id}/>
                <input  type="hidden" name="countryValue" value={locationValue}/> 
            <div className="w-3/5 mx-auto mb-36">
                <div className="mb-5">
                    <Select required onValueChange={(value)=> setLocationValue(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Country"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Contries
                                    {getAllCountries().map((item)=>(
                                        <SelectItem key={item.value} value={item.value}>
                                         {item.label} / {item.region}
                                        </SelectItem>
                                    ))}
                                </SelectLabel>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                   <LazyMap locationValue={locationValue} />                 
                </div>
                <CreatioBottomBar/>
            </form>
        </>
    )
}