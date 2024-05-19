'use client'
import { CustomInput } from '@/components/CustomInput'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { CreateOrderFormSchema } from '@/lib/types/from-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const CreateOrderPage = () => {
  const form = useForm<z.infer<typeof CreateOrderFormSchema>>({
    resolver: zodResolver(CreateOrderFormSchema),
    defaultValues: {
      orderName: '',
      orderDesc: '',
      isUrgent: false,
    },
  })
  const submitHandler = (data: z.infer<typeof CreateOrderFormSchema>) => {
    console.log('data .. . ... ')
    console.log({ data })
  }

  return (
    <main className=" container mx-auto min-h-screen pt-36 overflow-y-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitHandler)}>
          <div className="flex flex-col gap-10">
            <FormField
              control={form.control}
              name="orderName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white text-lg">
                      Order Name
                    </FormLabel>
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
              name="orderDesc"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white text-lg">
                      Order Desc
                    </FormLabel>
                    <FormControl>
                      <CustomInput type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="squareFeet"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="text-white text-lg">
                      Square Feet
                    </FormLabel>
                    <FormControl>
                      <CustomInput
                        type="text"
                        onChange={(data) =>
                          field.onChange(Number(data.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="isUrgent"
              render={({ field }) => {
                return (
                  <FormItem className="">
                    <FormLabel
                      className="text-white text-lg flex gap-8 items-center justify-start"
                      htmlFor="terms"
                    >
                      Is Urgent
                      <FormControl>
                        <Checkbox
                          id="terms"
                          onCheckedChange={(data) => {
                            field.onChange(data)
                          }}
                        />
                      </FormControl>
                    </FormLabel>

                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <div className="flex justify-end items-center gap-6">
              <Button type="reset" className="w-24 md:w-32">
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

export default CreateOrderPage
