import React from 'react'
import Image from 'next/image'

const WaveBackground = () => {
  let rnd = Math.floor(Math.random() * 4) + 1
  return (
    <div className='relative w-full h-80'>
      <Image
        src={`/waves/wave${rnd}.svg`}
        layout='fill'
        objectFit='cover'
        quality={100}
        alt='background wave'
      />
    </div>
  )
}

export default WaveBackground
