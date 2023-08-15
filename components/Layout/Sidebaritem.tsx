'use client'
import React from "react";
import { IconType } from "react-icons/lib/esm/iconBase";
import Link from 'next/link'

type props = {
  href?: string;
  label: string;
  icon: IconType;
  onClick?: () => void;
};

const Sidebaritem = ({ href, label, icon: Icon, onClick }: props) => {
  return (
    <Link
    href={href || ''}
    className=" flex items-center  hover:bg-slate-300
    hover:bg-opacity-10 rounded-full"
    onClick={onClick}
    
    >
      <div
        className="
        relative
        rounded-full
        h-14
        w-14
        flex
        items-center
        justify-center
        p-4
       
        cursor-pointer
        "
      >
        <Icon size={28} color="white" />
      </div>

      <div
        className="
        relative
        hidden
        lg:flex
        items-row
        gap-4
        p-4
        rounded-full

        cursor-pointer"
      >
        <p className=" hidden lg:block text-white text-xl">{label}</p>
      </div>
    </Link>
  );
};

export default Sidebaritem;
