import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
function NavBar() {
  return (
<motion.div 
      initial={{ y: "-100%" }} 
      animate={{ y: "0%" }} 
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 2 }} 
      className='h-[120px] w-full flex justify-between items-center p-3 bg-zinc-100 rounded-xl'
    >        <div className='ml-5'><h1 className='text-zinc-700 font-bold tracking-tighter text-4xl bg-gradient-to-r from-pink-300 shadow-lg  '>Homeversity</h1></div>
        <div className='flex justify-evenly  items-center font-bold uppercase p-4 h-[80%] w-[40%] bg-zinc-100 rounded-full text-sm shadow-xl'>
            <NavLink style={(e)=>{
              return{
                color:e.isActive?"white":"",
                backgroundColor:e.isActive?"black":"",
              }
            }} to="/" className='hover:text-white hover:bg-zinc-500 px-4 py-2 rounded-full duration-[0.5s]' >Home</NavLink>
            <NavLink  style={(e)=>{
              return{
                color:e.isActive?"white":"",
                backgroundColor:e.isActive?"black":"",
              }
            }}  to="/service" className='hover:text-white hover:bg-zinc-500 px-4 py-2 rounded-full duration-[0.5s]' >Service</NavLink>
            <NavLink  style={(e)=>{
              return{
                color:e.isActive?"white":"",
                backgroundColor:e.isActive?"black":"",
              }
            }} to="/about"className='hover:text-white hover:bg-zinc-500 px-4 py-2 rounded-full duration-[0.5s]' >About</NavLink>
            <NavLink  style={(e)=>{
              return{
                color:e.isActive?"white":"",
                backgroundColor:e.isActive?"black":"",
              }
            }} to="/contact" className='hover:text-white hover:bg-zinc-500 px-4 py-2 rounded-full duration-[0.5s]' >Contacts</NavLink>
            <NavLink  style={(e)=>{
              return{
                color:e.isActive?"white":"",
                backgroundColor:e.isActive?"black":"",
              }
            }} to="/reviews" className='hover:text-white hover:bg-zinc-500 px-4 py-2 rounded-full duration-[0.5s]' >Reviews</NavLink>
        </div>
        <div className=' text-zinc-700 font-semibold text-lg uppercase mr-10 hover:bg-gradient-to-r from-pink-300 rounded-full duration:[0.5s] py-2 px-4'>sign-up</div>
 
    </motion.div>
  )
}

export default NavBar

// className={({isActive}) =>
//`block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-400":"text-gray-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 }