import React from 'react'
import Particles from 'react-particles-js'

const styles = {
  root: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-1',
  },
}

const particle_params = {
  particles: {
    number: {
      value: 150,
    },
    line_linked: {
      enable: true,
      opacity: 0.2,
    },
    density: {
      enable: true,
      value_area: 1500,
    },
    move: {
      random: true,
      speed: 0.75,
    },
    size: {
      value: 1,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.7,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
}

const Welcome = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center'>
        <div style={styles.root}>
          <Particles
            canvasClassName='w-screen h-screen'
            width='100vw'
            height='100vh'
            style={{ pointerEvents: 'unset' }}
            params={particle_params}
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-3'>
            <div className='prose prose-4xl  text-white'>
              Hello,I&apos;m
              <span className='text-redish'> St</span>elios
              <span className='text-redish'> K</span>onstantelos.
            </div>
            <div className='prose prose-4xl text-white'>
              I&apos;m a full-stack web developer.
            </div>
          </div>
          <button className='prose prose-xl4 text-white border px-10 py-4 '>
            Click me
          </button>
        </div>
      </div>
    </>
  )
}

export default Welcome
