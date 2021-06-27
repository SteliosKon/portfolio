import React from 'react'
import Image from 'next/image'
import HeroImg from '../../public/Images/HeroImg.jpg'

const Welcome = () => {
  return (
    <div className='bg-landing-background bg-cover bg-center absolute top-0 w-full h-full'>
      <Image
        src={HeroImg}
        layout='fill'
        objectFit
        alt='hero background image'
      />
    </div>
  )
}

export default Welcome
