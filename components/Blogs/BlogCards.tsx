'use client'
import React, { useState } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/formatdates";
import Link from "next/link";

interface props {
    user:{
        name:string,
        image:string,
        id:string
    },
    title:string,
    content:string,
    poster:string,
    createdAt:string,
    id:string
}

const BlogPost = ({ user, title, content, poster,id,createdAt }:props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(false);
  };

  return (
    <div className="flex flex-col justify-center px-6 items-center py-5 border-b-[1px] border-slate-700">
      <div className="grid w-full grid-cols-[auto,1fr] gap-x-3 gap-y-1">
        <Link href={`/user/${user.id}`}  >
          <Image alt="" width={45} height={45} src={user.image}></Image>
        </Link>
        <div>
          <div className="flex gap-2 mb-3">
            <span className="font-semibold">{user.name}</span>
            <span className="font-semibold text-gray-500">{formatDate(createdAt)}</span>
          </div>

        <Link href={`/blogs/${id}`}>
          <p className="font-bold">{title}</p>
          <div dangerouslySetInnerHTML={{__html: content}} className="line-clamp-2 mb-2 text-gray-200"/>
            <img
              src={poster}
              alt=""
              onLoad={()=>setImageLoaded(true)}
              onError={handleImageLoad}
              className={`h-[250px] cursor-pointer w-full object-cover rounded-[6px_6px_0_0] ${imageLoaded?'':'hidden'}`}
            />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
