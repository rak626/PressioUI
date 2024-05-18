import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-nav">
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout
