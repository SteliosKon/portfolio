import 'styles/collector.scss'
import Navbar from 'components/layout/Navbar'
import { ToastContainer, Bounce } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Component {...pageProps} />
      </div>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  )
}

export default MyApp
