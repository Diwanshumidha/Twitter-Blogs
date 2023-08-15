import { getServerSession } from "next-auth/next";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const session = await getServerSession();
    console.log(session)

    console.log(id);

    if (!id)
      return NextResponse.json({
        success: false,
        error: "Please Provide User Id",
      });


    if (id === "me") {
      if(!session) return NextResponse.json({ success: false, error:'Login to get user' });
      const user = await prisma.user.findFirst({
        where: {
          email: session?.user?.email,
        },
      });

      console.log(user);
      return NextResponse.json({ success: true, user });
    }

    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });

    console.log(user);
    
    if (!user)
      return NextResponse.json({ success: false, error: "No User Found" });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Some Error" });
  }
}
