import React from 'react'

const Contact = () => {
  return (
    <div className='pt-20 sm:pt-24'>
        <h1 className=' font-bold text-3xl p-4 m-4'>Contact Page</h1>
        <form>
          <input type='text' className='border border-black p-2 m-2' placeholder='name' />
          <input type='text' className='border border-black p-2 m-2' placeholder='message' />
          <button className='border border-black p-2 m-2 bg-gray-100 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Contact