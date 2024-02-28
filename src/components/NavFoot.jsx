import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
function NavFoot() {
  return (
    <motion.div   initial={{ y: "100%" }} 
    animate={{ y: "0%" }} 
    transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 2 }}  className='ml-[43vw] h-[15%] w-[20%] mt-6 bg-zinc-50 rounded-full flex items-center justify-center gap-10'>
        <Link to={"/hostel"} className='font-semibold text-black uppercase flex items-center justify-center gap-1 text-lg tracking-tight hover:text-white hover:bg-zinc-700 px-4 py-2 rounded-full duration-[0.5s] '><FaBuilding />Hostel</Link>
        <Link to={"/pg"} className='font-semibold text-black uppercase flex items-center justify-center gap-1 text-lg tracking-tight hover:text-white hover:bg-zinc-700 px-4 py-2 rounded-full duration-[0.5s]'><FaHome />PG</Link>
    </motion.div>
  )
}

export default NavFoot

