"use client"
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import {BsStars} from 'react-icons/bs'
import { useEffect, useState } from "react";
import UserHeader from "@/components/User/UserHeader";
import Loader from "@/components/others/loader/Loader";

export default function Component({ params }: { params: { userid: string } }) {
  const [user,setUser] = useState()
  const [loading,setloading] = useState(false)

  
  const fetchData = async (id:string) => {
    try {
      setloading(true)
      const response = await axios.get(`/api/user?id=${id}`);
      const data = response.data;
      
      
      if(data.user.image.includes('google')){
        data.user.image = data.user.image.replace('s96', 's192');
        console.log(data);
      }
      setUser(data.user)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    finally{
      setloading(false)
    }
  };

  
  
  useEffect(()=>{
    fetchData(params.userid);
  },[])

  if(loading) return(<div className=" flex justify-center h-full items-center"><Loader/></div>)
  return (
    <div>
      <div className=" w-full hover-animation even z-10 items-center px-5 bg-black/60 backdrop-blur-lg flex justify-between sticky top-0 h-[50px]">
        <p className=" text-white text-center my-auto ">{user ? user?.name : 'No user Found'}</p>
        <BsStars/>
      </div>
      {user? <UserHeader user={user}/>:''}
     
    </div>
  );
}
