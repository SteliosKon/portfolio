import '@material-tailwind/react/tailwind.css'
import 'tailwindcss/tailwind.css'

// Components
import NaviBar from '../components/layout/NaviBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NaviBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
