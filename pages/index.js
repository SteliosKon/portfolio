import React, { Fragment } from 'react'
import Welcome from '../page-components/Homepage/Welcome'
import Primary from '../page-components/Homepage/Primary'
import Secondary from '../page-components/Homepage/Secondary'
import Logo from '../page-components/Homepage/Logo'

const index = () => {
  return (
    <Fragment>
      <Logo />
      <Welcome />
      <Primary />
      <Secondary />
    </Fragment>
  )
}

export default index
