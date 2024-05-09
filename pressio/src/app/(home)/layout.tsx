import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Themeprovider from '@/components/theme-provider'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative bg-gradient-to-tr from-[rgb(0,0,0)]  to-[rgb(78,75,75)]">
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout
