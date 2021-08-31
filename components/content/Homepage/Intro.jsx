import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { InstagramIcon, FacebookIcon, LinkedInIcon } from 'commons/helpers/svgStore'
const welcomeText = 'welcome to my website'

const Intro = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.from(q('.text'), 1, { rotate: 360, x: -100, opacity: 0 }, 1)
  })

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

          <span>
            <InstagramIcon />
          </span>

          <span>
            <LinkedInIcon />
          </span>

          <span>
            <FacebookIcon />
          </span>
        </div>
        <div className='intro-btn'>
          <button className='btn-filled'>
            <span>Mail me</span>
          </button>
          <button className='btn-outlined'>
            <span>Download CV</span>
          </button>
        </div>
      </div>
      <div className='image-container'>Column 2</div>
    </div>
  )
}

export default Intro
