import React, { useEffect, useState } from 'react'
import CustomLink from '../../commons/ui/CustomLink'

const NavBar = () => {
  const [scrollDir, setScrollDir] = useState(true)

  useEffect(() => {
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY <= lastScrollY)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [scrollDir])

  return (
    scrollDir && (
      <div className='navbar'>
        <div className='logo'>Stelios Konstantelos</div>
        <div className='nav-list'>
          <ul>
            <li>
              <CustomLink href='/' className='nav-links'>
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink href='/projects' className='nav-links'>
                Projects
              </CustomLink>
            </li>
            <li>
              <CustomLink href='/about' className='nav-links'>
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink href='/contact' className='nav-links'>
                Contact
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    )
  )
}

export default NavBar
