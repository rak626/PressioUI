import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative bg-gradient-to-tr bg-nav-foreground">
      <Navbar />
      {children}
    </main>
  )
}

export default HomeLayout
