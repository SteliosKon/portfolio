import React from 'react'
import Introduction from '../home/Introduction'
import WaveBackground from '../Backgrounds/WaveBackground'
import Component1 from '../home/Component1'
import Component2 from '../home/Component2'

const Welcome = () => {
  return (
    <div className=''>
      <div className='h-screen bg-indigo-400'>
        <div className='w-100 h-80 bg-gradient-to-b from-indigo-500 to-base_indigo -mt-3'>
          <Introduction />\
        </div>
        <WaveBackground />
      </div>
      <Component1 />
      <Component2 />
    </div>
  )
}

export default Welcome
