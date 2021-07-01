import React from 'react'
import Particles from 'react-particles-js'

const Primary = () => {
  return (
    <div className='h-screen'>
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: '#3CA9D1',
                blur: 5,
              },
            },
          },
        }}
        style={{
          width: '100vw',
          height: 'auto',
        }}
      />
    </div>
  )
}

export default Primary
