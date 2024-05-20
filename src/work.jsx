/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Work = () => {
  const navigate = useNavigate()
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 md:mt-3 lg:mt-1'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='flex md:flex-row flex-col space-between gap-4'>

            {/* Grid Item */}
            <div onClick={() => navigate('/pizza')}
            style={{ backgroundImage: `url('./dpizza1.png')` }}
            className='shadow-lg shadow-[#040c16] cursor-pointer group container rounded-md flex justify-center items-center mx-auto content-div text-center'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl  text-center font-bold text-white tracking-wider'>
                Pizza Sales
              </span>
            </div>
          </div>
          <div onClick={()=>navigate('/electric-vehicle')}
            style={{ backgroundImage: `url('./ev.png')` }}
            className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100' >
              <span className='text-2xl text-center font-bold text-white tracking-wider'>
                Electric Vehicle
              </span>
            </div>
          </div>

            {/* Grid Item */}
          <div onClick={() => navigate('/HR')}
            style={{ backgroundImage: `url('./hr2.png')` }}
            className='shadow-lg cursor-pointer shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl  text-center font-bold text-white tracking-wider'>
                HR Analytics
              </span>
            </div>
          </div>
          </div>
          </div>
        </div>
  );
};

export default Work;