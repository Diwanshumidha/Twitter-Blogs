import HomeBlogs from "@/components/Blogs/HomeBlogs"
import prisma from "@/prisma/client"
import {BsStars} from 'react-icons/bs'


const Home = () => {
  
  return (
    <div className="  ">
      <div className=" w-full hover-animation even z-10 items-center px-5 bg-black/60 backdrop-blur-lg flex justify-between sticky top-0 h-[50px]">
          <p className=" text-white text-center my-auto ">Home</p>
          <BsStars/>
      </div>
      <HomeBlogs/>
     
    </div>
  )
}

export default Home