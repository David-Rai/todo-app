import React from 'react'

const Transition = () => {
  return (
    <main className='h-screen w-full flex items-center justify-center'>
      <button 
      className='font-font1 h-10 w-[120px] bg-purple-600 text-white rounded-md
      transition-all ease-in-out duration-100
      hover:bg-transparent hover:text-purple-600 border-2 border-purple-600 hover:font-semibold
      '>
        Hover me</button>
    </main>
  )
}

export default Transition
