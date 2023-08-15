import prisma from "@/prisma/client";
import { NextResponse } from "next/server";


export const GET = async (request:NextResponse,params) => {
  try {
    if(!params.params.id){
        NextResponse.json({success:false,error:'Please Provide Valid Id'})
    }
    console.log(params.params.id)
    const blogs = await prisma.blog.findUnique({
        where:{
            id:params.params.id || '',
        },
        include:{
          user:true
        }
    })
    return NextResponse.json({success:true,blogs})
  } catch (error) {
    return NextResponse.json({success:false,error})
  }
};





