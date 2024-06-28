"use client"
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function Counter({name}:{name:string}){
    const [amount, setAmoount]= useState(0);

    function increasee(){
        setAmoount(amount +1);
    }
    function decrease(){
        // 마이너스가 안나오게 하기
        if(amount > 0){
            setAmoount(amount -1);
        }
    }
    return(
        <>
            <div className=" flex items-center gap-x-4">
                <input type="hidden"  name={name} value={amount}/>
                <Button variant="outline" size="icon" type="button" onClick={decrease}>
                    <Minus className="h-4 w-4 text-pretty"/>
                </Button>
            <p className="font-medium text-lg">{amount}</p>
            <Button variant="outline" size="icon" type="button" onClick={increasee}>
                <Plus className="h-4 w-4 text-pretty"/>
            </Button>
            </div>
        </>
    )
}