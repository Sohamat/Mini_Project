import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <>
      <div className='h-screen w-screen bg-sky-50 overflow-x-hidden '>
        <div className='w-full h-[10%] bg-zinc-100 flex justify-center items-center mb-2 '>
          <h1 className='text-3xl font-bold uppercase text-zinc-900 '>how may we <span className='text-orange-500'> serve</span>  you ?</h1>
        </div>
        <div className='bg-sky-50 h-[80%] w-full flex flex-col justify-evenly items-center'>
          <div className='h-[40%] w-full flex justify-evenly'>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/10973/10973571.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Air Conditioning</h1>
            </Link>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/2990/2990873.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Electricity</h1>
            </Link>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/995/995016.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Cleaning</h1>
            </Link>
          </div>
          <div className='h-[40%] w-full flex justify-evenly'>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/3322/3322056.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Laundry</h1>
            </Link>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/4497/4497450.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Water Service</h1>
            </Link>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/737/737967.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Food Service</h1>
            </Link>
          </div>
          <div className='h-[40%] w-full flex justify-evenly'>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/2099/2099193.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Wifi Service</h1>
            </Link>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/3447/3447607.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Phone Recharge</h1>
            </Link>
            <Link to={'/service/problem'} className='h-fit w-fit'>
              <div className='w-[100px] h-[100px] rounded-full bg-zinc-50 overflow-hidden hover:scale-110 transition-all duration-300'>
                <img className='position-center h-full w-full object-cover' src="https://cdn-icons-png.flaticon.com/128/870/870181.png" alt="" />
              </div>
              <h1 className='font-semibold text-zinc-700 tracking-tighter text-center'>Shifting Service</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
