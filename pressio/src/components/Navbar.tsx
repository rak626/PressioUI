'use client'
import { navlinks } from '@/constants/navlinks'
import { cn } from '@/lib/utils'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './MobileNav'
import { Button } from './ui/button'

const Navbar = () => {
  const pathName = usePathname()
  const { data: session } = useSession()
  console.log(session?.user?.username)
  return (
    <nav className="w-full z-40 px-6 py-2 flex items-center justify-between gap-8 bg-nav text-secondary shadow-2xl bg-blur-sm lg:justify-around">
      {/* logo section */}
      <div className="w-1/12 flex items-center justify-center">
        <Link href="/">
          <Image
            src={'/icons/InkTownLogo.svg'}
            alt="logo"
            width={70}
            height={70}
            className="bg-[hsl(0,7%,19%)] rounded-full shadow-sm"
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
              <div
                className={cn('tracking-widest hover:text-primary/40', {
                  'text-primary': isActive,
                })}
              >
                {navlink.name}
              </div>
            </Link>
          )
        })}
      </div>
      {/* button section */}
      <div className="hidden lg:flex gap-4">
        <Button asChild variant={'ghost'} className='rounded-full'>
          <Link href="/order/createorder">Create Order</Link>
        </Button>
        {!session && (
          <>
            <Button className="rounded-full">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="rounded-full">
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}{' '}
        {session && (
          <>
            <Button className="rounded-full">
              <Link href="/profile">{session.user.username}</Link>
            </Button>
            <Button
              className="rounded-full"
              onClick={async () => await signOut()}
            >
              Logout
            </Button>
          </>
        )}
      </div>
      <MobileNav />
    </nav>
  )
}

export default Navbar
