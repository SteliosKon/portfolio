import 'styles/collector.scss'
import Navbar from 'components/layout/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='container'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
