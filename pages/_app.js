import 'styles/collector.scss'
import Navbar from 'components/layout/Navbar'
import { ToastContainer, Bounce } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a new QueryClient instance
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='container'>
        <Navbar />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        theme='light'
        transition={Bounce}
      />
    </>
  )
}

export default MyApp
