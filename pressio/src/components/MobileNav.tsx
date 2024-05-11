import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

import { navlinks } from '@/constants/navlinks'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Router } from 'next/router'

const MobileNav = () => {
  const pathName = usePathname()
  const router = useRouter()
  return (
    <div className="lg:hidden ">
      <Sheet>
        <SheetTrigger>
          <Menu ascent={20} size={28} />
        </SheetTrigger>
        <SheetContent
          className="w-3/5 bg-secondary-foreground text-white"
          side={'left'}
        >
          <SheetClose asChild>
            <div className="h-full w-full flex flex-col gap-4 justify-between">
              <div className="mt-5 flex flex-col">
                {navlinks.map((navlink) => {
                  const isActive =
                    pathName === navlink.href ||
                    pathName.startsWith(`${navlink.href}/`)
                  return (
                    <SheetClose asChild key={navlink.name}>
                      <Link href={navlink.href}>
                        <div
                          className={cn(
                            'tracking-widest block p-5 pl-10 rounded-lg hover:bg-gray-500 hover:text-black ',
                            {
                              'bg-rose-600 hover:bg-rose-800': isActive,
                            }
                          )}
                        >
                          {navlink.name}
                        </div>
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>
              <SheetClose asChild>
                <div className="w-full flex flex-col gap-6">
                  <Button
                    className="border border-rose-200 hover:bg-gray-500"
                    variant={'ghost'}
                    onClick={() => router.push('/order/createorder')}
                  >
                    Create Order
                  </Button>

                  <Button
                    className="border border-rose-300  hover:bg-gray-500"
                    variant={'ghost'}
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </Button>
                </div>
              </SheetClose>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
