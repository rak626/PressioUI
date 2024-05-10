import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

import { navlinks } from '@/constants/navlinks'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={28} />
        </SheetTrigger>
        <SheetContent className="w-3/5" side={'left'}>
          <div>
            {navlinks.map((navlink) => {
              const isActive =
                pathName === navlink.href ||
                pathName.startsWith(`${navlink.href}/`)
              return (
                <Link key={navlink.name} href={navlink.href}>
                  <div
                    className={cn('tracking-widest', {
                      'text-orange-600': isActive,
                    })}
                  >
                    {navlink.name}
                  </div>
                </Link>
              )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
