import Link from 'next/link'
import { useRouter } from 'next/router'

const CustomLink = ({ href, children, ...props }) => {
  const router = useRouter()
  const style = {
    color: router.asPath === href ? '#EEBF63' : '#2F2F2F',
  }
  return (
    <Link href={href} {...props} style={style}>
      {children}
    </Link>
  )
}

export default CustomLink
