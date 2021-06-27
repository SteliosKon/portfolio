import React from 'react'
import Image from 'next/image'
import HeroImg from '../../public/Images/HeroImg.jpg'
import Basic from '../Animations/Basic'
import WaveBackground from '../Backgrounds/WaveBackground'

const Welcome = () => {
  return (
    // <div className='bg-landing-background bg-cover bg-center absolute top-0 w-full h-full'>
    //   <Image
    //     src={HeroImg}
    //     layout='fill'
    //     objectFit
    //     alt='hero background image'
    //   />
    // </div>
    <div className='h-100 w-100'>
      <div className='w-100 h-80 bg-gradient-to-b from-indigo-500 to-base_indigo '></div>
      <WaveBackground />
      <Basic />
    </div>
  )
}

export default Welcome
