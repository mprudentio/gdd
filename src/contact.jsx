import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='pt-10 w-full h-screen bg-[#0a192f] flex justify-center items-center px-4 pb-4 '>
      <form method='POST' action="https://getform.io/f/becf52d1-cc01-4324-bf6f-5ea1529dc8a3" className='flex flex-col w-full pt-16 max-w-[600px]'>
        <div className='pb-8'>
         <p  className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - muprudentio@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2 ' placeholder='Message' name="message" id="" cols="30" rows="10"></textarea>
        <button className='text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-full px-4 py-1 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact