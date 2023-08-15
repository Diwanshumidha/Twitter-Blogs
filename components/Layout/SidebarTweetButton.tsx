"use client";
import Link from 'next/link';
import {FaFeather} from 'react-icons/fa'
const SidebarTweetButton = () => {
  return (
    <Link href={'/blogs/create'}>
      <div
        className="
        mt-6
        lg:hidden
        rounded-full
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-80
        transition
        cursor-pointer"
      >
        <FaFeather size={24} color='white'/>
      </div>
      <div
        className="
        mt-6
        hidden
        rounded-full
        p-4
        lg:flex
        items-center
        justify-center
        bg-sky-500
        hover:bg-opacity-90
        transition
        cursor-pointer"
      >
        <p className='hidden lg:block font-semibold '>

        Add Blog
        </p>
      </div>
    </Link>
  );
};

export default SidebarTweetButton;
