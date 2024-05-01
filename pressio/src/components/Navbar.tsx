'use client'
import { navlinks } from '@/constants/navlinks'
import React from 'react'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const pathName = usePathname()
  return (
    <nav className="w-full z-40 px-6 py-2 flex items-center justify-around gap-8 bg-slate-300">
      {/* logo section */}
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src={'/icons/InkTownLogo.svg'}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      {/* navlinks section */}
      <div className="hidden lg:flex gap-10">
        {navlinks.map((navlink) => {
          const isActive =
            pathName === navlink.href || pathName.startsWith(`${navlink.href}/`)
          return (
            <Link key={navlink.name} href={navlink.href}>
              <div className={cn({ 'text-orange-400': isActive })}>
                {navlink.name}
              </div>
            </Link>
          )
        })}
      </div>
      {/* button section */}
      <div className="hidden lg:flex gap-8">
        <Button asChild>
          <Link href="/order/createorder">Create Order</Link>
        </Button>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
      <MobileNav />
    </nav>
  )
}

export default Navbar
