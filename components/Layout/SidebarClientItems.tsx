'use client'
import {BsHouseFill,BsApple,BsPerson} from 'react-icons/bs'
import {BiLogOut,BiLogIn} from 'react-icons/bi'
import Sidebaritem from './Sidebaritem'
import { useSession, signIn, signOut } from "next-auth/react";
const items = [
    {
        label:'Home',
        href:'/',
        icon:BsHouseFill
    },
    {
        label:'Trending',
        href:'/trending',
        icon:BsApple
    },
    {
        label:'Profile',
        href:'/user/me',
        icon: BsPerson
    }
]
const SidebarClientItems = () => {
    const {data:session,status} = useSession()




  return (
    <>
    {items.map((item)=>(
        <Sidebaritem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
        />
    ))}

    {session?<Sidebaritem onClick={()=>{signOut()}} label='Logout' icon={BiLogOut}/>:<Sidebaritem onClick={()=>{signIn()}} label='Login' icon={BiLogIn}/>}
    </>
  )
}

export default SidebarClientItems