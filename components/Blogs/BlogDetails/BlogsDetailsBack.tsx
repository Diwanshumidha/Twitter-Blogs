'use client'
import Link from 'next/link'
import React from 'react'
import { HiOutlineShare } from 'react-icons/hi'
import { MdOutlineArrowBackIos } from 'react-icons/md'

const BlogsDetailsBack = () => {
  return (
    <div className=" flex justify-between my-14 px-8  ">
        <Link href={'/'} className=" w-[50px] h-full text-white cursor-pointer hover:text-sky-500 " >
          <MdOutlineArrowBackIos size={30} />
        </Link>
        <div className=" w-[50px] h-full text-white cursor-pointer hover:text-sky-500 ">
          <HiOutlineShare size={30} />
        </div>
      </div>
  )
}

export default BlogsDetailsBack