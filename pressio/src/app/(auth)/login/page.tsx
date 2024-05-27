'use client'
import { CustomInput } from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { LoginFormSchema } from '@/schema/LoginFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const LoginPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      phone: '',
      password: '',
    },
  })

  const submitForm = async (data: z.infer<typeof LoginFormSchema>) => {
    console.log('login form data: ', data)
    try {
      const result = await signIn('credentials', {
        phone: data.phone,
        password: data.password,
        redirect: true,
        callbackUrl: (searchParams.get('callbackUrl') || '/') as string,
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className=" container md:w-2/3 lg:w-1/3 mx-auto min-h-screen pt-36">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitForm)}>
          <div className="flex flex-col gap-10">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white text-lg">Phone</FormLabel>
                    <FormControl>
                      <CustomInput type="text" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white text-lg">
                      Password
                    </FormLabel>
                    <FormControl>
                      <CustomInput type="password" {...field} className="" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <div className="flex justify-end items-center gap-6">
              <Button type="reset" className="">
                Reset
              </Button>
              <Button type="submit" className="">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </main>
  )
}

export default LoginPage
