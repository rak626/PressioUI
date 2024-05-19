import { Anton } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'

const anton = Anton({ weight: '400', subsets: ['latin'] })
const Hero = () => {
  return (
    <section>
      <div className="relative h-screen py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
          <Image
            className="object-cover object-right w-full h-full lg:object-center"
            src="/images/tshirt.jpeg"
            alt="Inktown"
            width={1000}
            height={1000}
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div
            className={cn(
              'max-w-lg mx-auto text-center md:py-16 xl:max-w-2xl',
              anton.className
            )}
          >
            <h1 className="text-center text-secondary text-[6rem] md:text-[8rem] 3xl:text-[12rem]">
              {' '}
              Stand Out.
            </h1>
            <br />
            <p className="text-center text-secondary text-[6rem] md:text-[7.5rem] 3xl:text-[12rem]">
              {' '}
              Wear Custom.
            </p>
          </div>
          <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
            <Button className='mt-10'> View Collection  <MoveRight  className='ml-2'/></Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
