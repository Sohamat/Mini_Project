import React from 'react'

import { FaFemale } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsBookshelf } from "react-icons/bs";
import { IoWater } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { PiFanLight } from "react-icons/pi";
import { MdTableRestaurant } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { FaSquareCheck } from "react-icons/fa6";











function Details() {
  return (
    
    <div className=''>
      
      <div className="border border-black rounded-full mt-5 ml-7 mr-7 flex shadow-xl">
        <div className='h-[70px] w-[130px] border-r'><h1 className='mt-4 ml-11 text-3xl'>PG</h1>
        </div>
        <div className='w-[930px] border border-r'><h1 className='mt-5 text-2xl'>Address</h1></div>
        <div className='w-[130px] border border-r'><h1 className='mt-3 ml-8 text-3xl'>Rent</h1></div>
        <div className='w-[130px] border border-r'><h1 className='mt-3 ml-3 text-3xl'>Deposit</h1></div>
        <div className='mt-4 ml-5'><button className='h-[40px] w-[130px] border border-blue-700 text-white transition ease-in-out delay-100 bg-blue-700  hover:scale-110 hover:bg-black duration-300 rounded-xl mr-3'>Get Ownerdetails</button></div>
      </div>
      <div className='mt-7 ml-7 mr-7 flex justify-between'>
        <div className='h-[500px] w-[1200px] flex p-3 shadow-2xl'>
          <div className='w-[600px] h-[475px]  mr-4 border border-gray-400 shadow-2xl bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Thumbnail_1.jpg")] bg-center bg-cover rounded-xl'>

          </div>
          <div className='flex flex-col'>
            <div className='w-[400px] h-[250px]  mb-4 border border-gray-400 shadow-2xl bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Room_1.jpg")] bg-center bg-cover rounded-xl'>

            </div>
            <div className='w-[400px] h-[250px] border border-gray-400 shadow-2xl bg-[url("https://d2blna3sxzw742.cloudfront.net/Property-Photos/46-Room_2.jpg")] bg-center bg-cover rounded-xl'>
            </div>
          </div>
        </div>

        <div className='w-[460px] h-[500px]  p-4 flex flex-col gap-y-5 shadow-xl rounded-md '>
          <div className='w-[420px] h-[250px] flex'>
            <div className='flex flex-col'>
              <div className='w-[210px] h-[83px] border  flex justify-items-center'>
                <div>
                 <FaFemale className='text-5xl mt-4'/>
                </div>
                <div>
                  <h1 className='text-1xl font-bold mt-4 ml-4'>Male</h1>
                  <p className=' from-neutral-400 ml-4 text-sm'>Preferred Tenant</p>
                </div>
              </div>
              <div className='w-[210px] h-[83px] border  flex justify-items-center'>
              <div>
                 <RiMotorbikeFill className='text-5xl mt-4 ml-2'/>
                </div>
                <div>
                  <h1 className='text-1xl font-bold mt-4 ml-4'>Bike</h1>
                  <p className=' from-neutral-400 ml-4 text-sm'>Parking</p>
                </div>
              </div>
              <div className='w-[210px] h-[83px] border  flex justify-items-center'>
                <div>
                 <MdOutlineFoodBank className='text-5xl mt-4'/>
                </div>
                <div>
                  <h1 className='text-1xl font-bold mt-4 ml-4'>Available</h1>
                  <p className=' from-neutral-400 ml-4 text-sm'>Food facility</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='w-[210px] h-[83px] border  flex justify-items-center'>
                <div>
                 <FaBed className='text-5xl mt-4 ml-3'/>
                </div>
                <div>
                  <h1 className='text-1xl font-bold mt-4 ml-4'>Single Sharing</h1>
                  <p className='from-neutral-400 ml-4 text-sm'>Type of Bed Sharing</p>
                </div>
              </div>
              <div className='w-[210px] h-[83px] border  flex justify-items-center'>
                <div>
                  <FaFemale className='text-5xl mt-4'/>
                </div>
                <div>
                  <h1 className='text-2xl font-bold mt-3 ml-4'>Male</h1>
                  <p className=' from-neutral-400 ml-4'>Preferred Tenant</p>
                </div>
              </div>
              <div className='w-[210px] h-[83px] border flex justify-items-center'>
                   <div>
                 <FaFemale className='text-5xl mt-4'/>
                </div>
                <div>
                  <h1 className='text-2xl font-bold mt-3 ml-4'>Male</h1>
                  <p className=' from-neutral-400 ml-4'>Preferred Tenant</p>
                </div>
              </div>
            </div>
            
            <div></div>
          </div>
          <button className='h-[40px] w-[420px] border border-blue-700 text-white transition ease-in-out delay-50 bg-blue-700  hover:scale-70 hover:bg-black duration-300 mt-4 shadow-2xl rounded-md'>Get Ownerdetails</button>
          <div className='flex gap-5 '>
            <button className='h-[40px] w-[420px] border border-blue-700 bg-black text-white    mt-4 shadow-2xl rounded-md'>Message Owner</button>
            <button className='h-[40px] w-[420px] border border-blue-700 bg-black text-white    mt-4 shadow-2xl rounded-md'>Plan A visit</button>
          </div>

          
        </div>


      </div>

      <div className='mt-10 ml-9 text-center'>
        <h1 className='text-7xl underline decoration-blue-700'>Overview of Property</h1>
        <h1 className='text-4xl mt-5 font-semibold'>Mumbai Plaza</h1>
        <div className='flex justify-center text-center'>
          <CiLocationOn className='mt-2 text-3xl text-start'/>
          <p className='text-2xl mt-2'>Near Bhavans College,Andheri West</p>
        </div>
        <div className='flex justify-center'>
          <div className='h-[250px] w-[1000px]  p-5 mt-5 rounded-md'>
            <p className='text-black text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias cum laudantium mollitia illum culpa officiis possimus laboriosam ex cupiditate qui placeat doloribus harum ducimus quis voluptates voluptate deleniti et, nesciunt temporibus vel delectus adipisci fugit! Nihil, necessitatibus. Nihil sed voluptatem reprehenderit praesentium nostrum, eveniet et molestias magnam eligendi? Nemo corporis molestiae eius exercitationem et quae aliquam error praesentium, eligendi hic deleniti omnis, sequi mollitia obcaecati, autem nihil! Facere molestias totam aspernatur. Illo velit ab</p>
          </div>
        </div>
      </div>

      <div className='w-[1470px] h-[670x]  mr-9 ml-9 mt-5 flex gap-12 p-4'>
      
        <div className='w-[700px] h-[670px] border shadow-2xl  ml-3'>
          <h1 className='text-3xl px-6 py-9 underline border border-b-black font-bold decoration-blue-700'>Room Details</h1>
          <div className='flex justify-around text-2xl mt-4 '>
          <h1 className='border border-black bg-stone-600 p-3 rounded-xl'>Single Sharing Room</h1>
          <h1 className='border border-black bg-stone-600 p-3 rounded-xl'>Rent : 100000 Rs</h1>
          <h1 className='border border-black bg-stone-600 p-3 rounded-xl'>Deposit : 1 Rs</h1>
          </div>
          <h1 className='mt-4 ml-4 text-2xl'>Room Amenities</h1>
          <div className='flex flex-col gap-y-6 mt-4 ml-7'>
          <div className='flex gap-4'>
            <div className='h-[100px] w-[300px] border border-gray-400 shadow-2xl bg-stone-200 rounded-lg flex'>
              <BsBookshelf className='text-4xl mt-6'/>
              <h1 className='text-3xl mt-6 ml-3'>Ward drobe</h1>
            </div>
            <div className='h-[100px] w-[300px] border border-gray-400 shadow-2xl bg-stone-200 rounded-lg flex'>
            <IoWater className='text-5xl mt-6'/>
            <h1 className='text-2xl mt-3 ml-3'>Hot/Cold Water Options</h1>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='h-[100px] w-[300px] border border-gray-400 shadow-2xl bg-stone-200 rounded-lg flex'>
            <FaHandHoldingWater className='text-5xl mt-3 ml-2'/>
            <h1 className='text-2xl mt-6 ml-3'>Aqua Water</h1>
            </div>
            <div className='h-[100px] w-[300px] border border-gray-400 shadow-2xl bg-stone-200 rounded-lg flex'>
            <PiFanLight className='text-5xl mt-5'/>
            <h1 className='text-2xl mt-6 ml-3'>AC/Non-Ac</h1>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='h-[100px] w-[300px] border border-gray-400 shadow-2xl bg-stone-200 rounded-lg flex'>
            <MdTableRestaurant className='mt-5 text-5xl'/>
            <h1 className='text-2xl mt-6 ml-4'>One Table,One Chair</h1>
            </div>
            <div className='h-[100px] w-[300px] border border-gray-400 shadow-2xl bg-stone-200 rounded-lg flex'>
            <GiBookshelf className='text-5xl mt-5 ml-2'/>
            <h1 className='text-2xl mt-7 ml-3'>Book Shelf</h1>
            </div>
          </div>
          </div>
                  
        </div>
        <div className='w-[700px] h-[670px] border shadow-2xl  ml-3'>
          <h1 className='text-3xl px-6 py-9 underline border border-b-black font-bold decoration-blue-700'>PGPlaza Services !</h1>
          <div className='flex flex-col gap-y-5 p-5'>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
            <h1>6</h1>
          </div>      
        </div>
      </div>

      <div>
        <h1 className='text-4xl ml-7 mt-7 underline decoration-red-500'>Rules & Regulations to be Followed</h1>
        <div className='flex justify-center mt-7'>
        <div className='w-[1000px] h-[620px] rounded-md shadow-xl border border-gray-100'>
          <div className='flex gap-4 p-3 text-3xl bg-slate-100'>
            <span className=''>
              <FaSquareCheck className='mt-3'/>
            </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus deserunt ea!</span>
          </div>

          <div className='flex gap-4 p-3 text-3xl'>
            <span className=''>
              <FaSquareCheck className='mt-3'/>
            </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus deserunt ea!</span>
          </div>
          <div className='flex gap-4 p-3 text-3xl bg-slate-100'>
            <span className=''>
              <FaSquareCheck className='mt-3'/>
            </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus deserunt ea!</span>
          </div>
          <div className='flex gap-4 p-3 text-3xl'>
            <span className=''>
              <FaSquareCheck className='mt-3'/>
            </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus deserunt ea!</span>
          </div>
          <div className='flex gap-4 p-3 text-3xl bg-slate-100'>
            <span className=''>
              <FaSquareCheck className='mt-3'/>
            </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus deserunt ea!</span>
          </div>
          <div className='flex gap-3 p-3 text-3xl'>
            <span className=''>
              <FaSquareCheck className='mt-3'/>
            </span>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam possimus deserunt ea!</span>
          </div>
        </div>
        </div>
        
      </div>

      {/* <div className='w-[1400px] h-[400px] bg-slate-300 text-center ml-12 mt-5 text-3xl'>
        FOOTER
      </div>
       */}
      <div className='mt-5'>
     
      </div>
            
    </div>
  )
}

export default Details