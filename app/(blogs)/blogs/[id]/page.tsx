import prisma from "@/prisma/client";
import './reset.css'



import React from "react";
import { redirect } from "next/navigation";
import BlogsDetailsBack from "@/components/Blogs/BlogDetails/BlogsDetailsBack";

const page = async ({ params }: { params: { id: string } }) => {
  const data = await getblog(params.id);
  return (
    <div className="pt-14">
      <BlogsDetailsBack/>
      <div className=" container px-6 max-w-6xl flex flex-col  items-center  mx-auto">
        <div className=" flex justify-center mb-6 items-center flex-col ">
          <h2 className=" text-3xl font-bold max-w-[70%]  text-center lg:text-4xl">
            {data?.title}
          </h2>

          <div className=" text-gray-500 mt-2">
            <span>By {data?.user.name} |</span>
            <span> August 2023 |</span>
            <span> 30 min read</span>
          </div>
        </div>
        <img src={data?.poster} className="w-full max-h-[500px] object-cover"></img>
        <div
          className="my-10 reset_prelight"
          dangerouslySetInnerHTML={{ __html: data?.content! }}
        />
      </div>
    </div>
  );
};

export default page;

async function getblog(id: string) {
  const data = await prisma.blog.findUnique({
    where: {
      id: id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  return data;
}
