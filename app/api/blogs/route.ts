import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next"


export const GET = async (request:NextResponse) => {
  try {
    const blogs = await prisma.blog.findMany({
        take:20,
        orderBy:{
          createdAt:'desc'
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


export async function POST(request: Request) {
  try {
    
     const {title,content,poster} = await request.json()
     console.log('New Blog')
     console.log(title)
     const session = await getServerSession()

    if(!title || !content || !poster) return NextResponse.json({success:false,error:'Please Provide All Felids'})
    if(!session) return NextResponse.json({success:false,error:'You are Not Authenticated'})
    console.log(session)
    const Blog = await prisma.blog.create({
        data:{
            title,
            content,
            poster,

            user:{
                connect:{
                    email:session?.user?.email as string
                }
            }

        }
    })

    return NextResponse.json({success:true,Blog})
  } catch (error) {
    console.log(error)
    return NextResponse.json({success:false,error})

  }
}



