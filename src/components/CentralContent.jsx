import React from 'react';
import Typewriter from './TypeWriterEffect';

function CentralContent() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className='h-[60%] text-white w-full p-[20px] flex flex-col justify-between'>
      <div className='h-[60%] w-full text-[8vw] font-bold tracking-tighter leading-none'>
        <h1 className='mb-4'>FIND <span className='bg-gradient-to-l from-yellow-500'>YOUR</span></h1>
        <Typewriter  text="D REAM" />
      </div>
      <h3 className=' mt-[60px] text-lg font-semibold leading-none mb-8'>Sit amet consectetur adipisicing elit. Magni, ipsum. Sapiente magnam fugiat voluptate alias!</h3>
      <button className="px-8 py-0.5 w-32 h-64 border-2  border-black dark:border-white uppercase bg-zinc-600 font-bold text-zinc-100 transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
        explore
      </button>
    </div>
  );
}

export default CentralContent;
