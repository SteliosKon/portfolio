import React from 'react'
import { useSpring, animated } from 'react-spring'

const Basic = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return <animated.div style={props}>I will fade in</animated.div>
}

export default Basic
