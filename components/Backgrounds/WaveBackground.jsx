import React from 'react'
import Image from 'next/image'

const WaveBackground = () => {
  return (
    <div className='relative w-full h-80'>
      <Image
        src='/waves/wave1.svg'
        width={1440}
        height={320}
        alt='background wave'
      />
      {/* <Image
        src='/public/waves/wave2.svg'
        layout='fill'
        alt='background wave'
      />
      <Image
        src='/public/waves/wave3.svg'
        layout='fill'
        alt='background wave'
      />
      <Image
        src='/public/waves/wave4.svg'
        layout='fill'
        alt='background wave'
      /> */}
    </div>
  )
}

export default WaveBackground
