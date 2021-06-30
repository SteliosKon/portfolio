import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='w-max absolute mt-3 ml-3'>
      <Image src='/images/logo.svg' alt='Logo' width={50} height={50} />
    </div>
  )
}

export default Logo
