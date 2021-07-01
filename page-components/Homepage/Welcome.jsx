import React from 'react'
import Particles from 'react-particles-js'

const styles = {
  root: {
    position: 'absolute',
    height: '100%',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-1',
  },
}
const Welcome = () => {
  return (
    <>
      <div className='h-screen flex justify-center'>
        <div style={styles.root}>
          <Particles />
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
