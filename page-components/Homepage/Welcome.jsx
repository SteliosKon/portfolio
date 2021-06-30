import React from 'react'

const Welcome = () => {
  return (
    <div className='h-screen bg-black flex justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='mb-3'>
          <div className='prose prose-4xl  text-white'>
            Hello,I&apos;m
            <span className='text-redish'> St</span>elios
            <span className='text-redish'> K</span>onstantelos.
          </div>
          <div className='prose prose-4xl text-white'>
            I&apos;m a full-stack web developer.
          </div>
        </div>
        <button className='prose prose-xl4 text-white border px-10 py-4 '>
          Click me
        </button>
      </div>
    </div>
  )
}

export default Welcome
