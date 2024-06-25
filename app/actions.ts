"use server"

import { redirect } from "next/dist/server/api-utils"
import prisma from "./lib/db"

export async function createAirbnbHome({userId}:{userId:string}){
    const data = await prisma.home.findFirst({
        where:{
            userId: userId,
        },
        orderBy:{
            createdAT:"desc"
        }
    })
    if(data === null){
        const data = await prisma.home.create({
            data:{
               userId:userId, 
            }
        })
        return redirect
    }
}