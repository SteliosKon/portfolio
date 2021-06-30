import React from 'react'
import WaveBackground from '../Backgrounds/WaveBackground'

const Introduction = () => {
  return (
    <>
      <div className='flex flex-col items-center p-10'>
        <div className='prose prose-8xl text-white'>Front-end Development</div>
        <div className='prose prose-2xl text-white max-w-none'>
          Hi. I’m Stelios, a freelance Front-end Developer with 2 years
          commercial experience creating successful websites.
        </div>
      </div>
      {/* <WaveBackground /> */}
    </>
  )
}

export default Introduction
