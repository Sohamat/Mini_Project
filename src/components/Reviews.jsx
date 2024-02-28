import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Reviews() {
  const [rating, setRating] = useState(0);
  const [reliability, setReliability] = useState(0);
  const [experience, setExperience] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReliabilityChange = (value) => {
    setReliability(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className='h-fit w-screen bg-gradient-to-r from-[#5f43b2] to-[#3a3153] overflow-x-hidden flex flex-col items-center'>
      <div className='mt-5 flex justify-center leading-none items-center h-1/10 text-5xl font-bold text-white'>
        Your <span className='text-yellow-200'>Review</span> Matters!
      </div>
      <div className='mt-5 h-9/20 w-4/5 bg-zinc-100 rounded-lg flex flex-col items-center'>
        <form onSubmit={handleSubmit} className='w-full p-8'>
          <div className='flex justify-between mb-6'>
            <div>
              <label htmlFor='rating' className='text-zinc-800 font-semibold tracking-tight text-lg mr-2'>
                Rating:
              </label>
              <div className='flex'>
                {[1, 2, 3, 4, 5].map((index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 text-2xl cursor-pointer ${
                      rating >= index ? 'text-yellow-600' : ''
                    }`}
                    onClick={() => handleRatingChange(index)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor='reliability' className='text-zinc-800 font-semibold tracking-tight text-lg mr-2'>
                Reliability:
              </label>
              <div className='flex'>
                {[1, 2, 3, 4, 5].map((index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 text-2xl cursor-pointer ${
                      reliability >= index ? 'text-yellow-600' : ''
                    }`}
                    onClick={() => handleReliabilityChange(index)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full'>
            <label htmlFor='experience' className=' text-lg text-zinc-800 font-semibold tracking-tight'>
              Experience:
            </label>
            <textarea
              id='experience'
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              rows='8'
              className='w-full bg-white p-2 rounded-lg mt-2'
            ></textarea>
          </div>
          <button
            type='submit'
            className='mt-6 bg-yellow-400 text-zinc-800 font-semibold tracking-tight py-2 px-6 rounded-lg hover:bg-yellow-500'
          >
            Submit
          </button>
        </form>
      </div>
      <motion.div initial={{ x: 0 }} animate={{ x: '-40%' }} transition={{ ease: 'linear', repeat: Infinity, duration:25 }} className='marquee h-[35vh] w-full  mb-10 mt-5 flex items-center gap-5 pr-5 pl-5 flex-nowrap'>
        {[...Array(5)].map((_, index) => (
          <div key={index} className='h-[30vh] w-[20vw] hover:scale-110 bg-zinc-50 rounded-md flex flex-col justify-center pl-3'>
            <div className='flex'>
              {[1, 2, 3, 4,5].map((star) => (
                <span
                  key={star}
                  className={`text-yellow-400 text-xl ${
                    star <= index + 1 ? 'text-yellow-500' : ''
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className='text-black my-4 text-sm font-semibold tracking-tighter p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque numquam quaerat quisquam vitae dicta minima sit ipsum recusandae quidem.</div>
            <div className='flex gap-10'>
              <div className='w-[50px] h-[50px] rounded-full bg-white mb-2 ml-2 overflow-hidden'><img className='position-top h-full w-full object-cover' src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" /></div>
              <div className=''>
                <div className='text-right font-semibold text-md tracking-tight text-black leading-none mb-1'>Soham Vichare</div>
                <h5 className='leading-none tracking-tighter text-sm font-md'>Student</h5>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Reviews;
