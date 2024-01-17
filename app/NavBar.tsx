import { Text } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png'

const NavBar = () => {
  return (
    <nav className='h-[8vh] flex justify-between py-4 px-10 bg-[var(--secondary-black)]'>
      <Link href={'/'}>
        <Image
          src={logo}
          alt='logo'
          width={140}
          height={80}
        />
      </Link>
      {
        true ?
          <Link href={'/login'}>
            <Text className='font-bold'>LOG ON</Text>
          </Link>
          :
          <Link href={'/register'}>
            <Text className='font-bold'>REGISTER</Text>
          </Link>
      }
    </nav>
  )
}

export default NavBar;
