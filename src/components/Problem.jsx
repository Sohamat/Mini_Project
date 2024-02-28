import React from 'react';

function Problem() {
  return (
    <div className='w-screen h-screen bg-zinc-800'>
      <div className='h-[30%] w-screen bg-zinc-200 flex justify-center items-center'>
        <h1 className='text-orange-500 text-6xl font-bold tracking-tight shadow-lg'>Your Personal Assistance</h1>
      </div>
      <form className='p-5 text-center flex flex-col items-center' action="">
        <input className='w-[60%] rounded-lg p-2 font-semibold mb-4' type="text" placeholder='Name' />
        <input className='w-[60%] rounded-lg p-2 font-semibold mb-4' type="text" placeholder='Address' />
        <input className='w-[60%] rounded-lg p-2 font-semibold mb-4' type="text" placeholder='Unique ID' />
        <textarea className='w-[60%] h-[100px] rounded-lg p-2 font-semibold mb-4' placeholder='Problem Description'></textarea>
        <button className='w-[60%] bg-orange-500 text-white rounded-lg p-2 font-semibold hover:bg-orange-600 duration-300'>Submit</button>
      </form>
    </div>
  );
}

export default Problem;