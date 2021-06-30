import React, { useState } from 'react'
import Navbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
import Nav from '@material-tailwind/react/Nav'
import NavItem from '@material-tailwind/react/NavItem'
import NavLink from '@material-tailwind/react/NavLink'
import Icon from '@material-tailwind/react/Icon'
import Link from 'next/link'

// consts
const FB_PROFILE = 'https://www.facebook.com/stelios.ntelos/'
const GH_PROFILE = 'https://github.com/SteliosKon/portfolio'

export default function NaviBar() {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <Navbar color='indigo' navbar className='mb-0'>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand> SFK</NavbarBrand>
          <NavbarToggler
            color='white'
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple='light'
          />
        </NavbarWrapper>
        <NavbarCollapse open={openNavbar}>
          <Nav>
            <Link href='/' passHref>
              <NavLink active='light' ripple='light'>
                <Icon name='account_circle' size='xl' />
              </NavLink>
            </Link>
            <Link href={FB_PROFILE} passHref>
              <NavLink ripple='light'>
                <Icon name='facebook' size='xl' />
              </NavLink>
            </Link>

            <Link href={GH_PROFILE} passHref>
              <NavLink ripple='light'>
                <Icon name='code' size='xl'></Icon>
              </NavLink>
            </Link>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
