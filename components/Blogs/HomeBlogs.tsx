"use client";
import useFetchHook from "@/lib/useFetchhook";

import React, { useEffect } from "react";
import BlogCards from "./BlogCards";
import Loader from "../others/loader/Loader";


const HomeBlogs:React.FC  = () => {
    const { data, loading, error, fetchData } = useFetchHook();
  
    useEffect(() => {
      fetchData("/blogs");
    }, []);
    
    
    console.log(data.blogs);
  
    if (loading) return <div className=" flex justify-center items-center mt-9"><Loader/></div>;
    if (error)
      return (
        <div className="text-red-600">
          Unable to fetch data check your network or try reloading the page
        </div>
      );
    return (
      <div className=" ">

        
        {data.blogs.map((item)=>(
            <BlogCards key={item.id} title={item.title} content={item.content} poster={item.poster} createdAt={item.createdAt} user={{name:item.user.name,image:item.user.image,id:item.user.id}}  id={item.id} />
        ))}
      </div>
    );
  };
  
  export default HomeBlogs;
