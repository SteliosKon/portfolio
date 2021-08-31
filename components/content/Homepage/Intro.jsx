import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const welcomeText = 'welcome to my website'

const Intro = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.from(q('.text'), 1, { rotate: 360, x: -100, opacity: 0 }, 1)
  })

  return (
    <div className='introduction'>
      <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1>{' '}
      <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1>{' '}
      <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1> <h1>amasndasdasd</h1>
    </div>
  )
}

export default Intro
