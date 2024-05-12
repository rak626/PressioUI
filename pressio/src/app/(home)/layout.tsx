import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative bg-gradient-to-tr bg-[#332D2F]">
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout
