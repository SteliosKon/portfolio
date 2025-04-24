import React, { useState } from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { sendEmailRequest } from './api'

const notifySuccess = () => toast('Stelios received the email. Thank you!')
const notifyError = () => toast('Something went wrong')

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

  const { mutate, status } = useMutation({
    mutationKey: ['email-send'],
    mutationFn: sendEmailRequest,
    onSuccess: () => {
      notifySuccess()
      handleCloseModal()
    },
    onError: () => notifyError(),
  })

  const isLoading = status == 'pending'

  const handleSendEmail = () => {
    mutate({
      waitSeconds: 10,
      message: `This message is coming from your portofolio website: ${message}`,
      email: 'steliosnteloss@gmail.com',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSendEmail()
  }

  const onRequestClose = () => {
    handleCloseModal()
    setMessage('')
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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

          <button type='submit' className='submit-btn' disabled={isLoading}>
            {isLoading ? <span className='spinner'></span> : 'Submit'}
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default MailModal
