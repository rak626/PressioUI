import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Themeprovider from '@/components/theme-provider'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout
