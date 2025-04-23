import React, { useState } from 'react'
import Image from 'next/image'
import MailModal from './MailModal'

const Intro = () => {
  const [mailModalIsOpen, setOpenMailModal] = useState(true)

  const handleOpenModal = () => {
    setOpenMailModal(true)
  }

  const handleCloseModal = () => {
    setOpenMailModal(false)
  }

  return (
    <div className='introduction'>
      <div className='info-container'>
        <h4 className='hey'>Hey!</h4>
        <h1 className='name'>
          <span>
            I&apos;m <span style={{ color: '#EEBF63' }}>Stelios Konstantelos</span>
          </span>
          <span>Front-end Dev.</span>
        </h1>
        <div className='text-base desc'>
          <span>Minimalist with passion for coding.</span>
          <span>Designing, implementing and testing UI components</span>
        </div>
        <div className='text-base social'>
          <span>Find me</span>

          <span onClick={() => window.open('https://github.com/SteliosKon', '_blank')}>
            <Image src={'/github.svg'} height={32} width={32} alt='github-button' />
          </span>

          <span onClick={() => window.open('https://www.linkedin.com/in/stelioskon/', '_blank')}>
            <Image src={'/linkedin.svg'} height={32} width={32} alt='linkedin-button' />
          </span>
        </div>
        <div className='intro-btn'>
          <button onClick={handleOpenModal} className='btn-filled'>
            <span>Mail me</span>
          </button>
          <button className='btn-outlined'>
            <span>Download CV</span>
          </button>
        </div>
      </div>
      <div className='image-container'>
        <Image src={'/banner.svg'} height={500} width={500} alt='github-button' />
      </div>
      <MailModal isOpen={mailModalIsOpen} handleCloseModal={handleCloseModal} />
    </div>
  )
}

export default Intro
