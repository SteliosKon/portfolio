import React, { useState } from 'react'
import Modal from 'react-modal'
import { toast, Bounce } from 'react-toastify'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  },
}

const MailModal = ({ isOpen, handleCloseModal }) => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [delay, setDelay] = useState('')

  const notify = () => toast('Wow so easy !')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here (like sending an email with delay)
    console.log({ message, email, delay })
    notify()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel='Example Modal'
    >
      <div className='form-container2'>
        <form onSubmit={handleSubmit} className='form'>
          <div className='form-group'>
            <label htmlFor='message'>Your Message</label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Enter your message here'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Your Email Address</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='delay'>Add Delay to Your Email</label>
            <input
              type='number'
              id='delay'
              value={delay}
              onChange={(e) => setDelay(e.target.value)}
              placeholder='Enter delay in seconds'
              min='1'
              required
            />
          </div>

          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default MailModal
