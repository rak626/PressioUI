import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='bg-nav'>
      <Navbar />
      {children}
    </main>
  )
}

export default AuthLayout
