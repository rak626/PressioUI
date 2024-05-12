'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
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
    <main className=" w-1/4 mx-auto min-h-screen py-[7rem]">
      <Card className="bg-card-foreground text-card">
        <CardHeader>Create New Order</CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)}>
            <CardContent className="flex flex-col gap-4 ">
              <FormField
                control={form.control}
                name="orderName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Order Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Order Name"
                          type="text"
                          {...field}
                        />
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
                      <FormLabel>Order Desc</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Order Desc" {...field} />
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
                      <FormLabel>Square Feet</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Square Feet"
                          type="number"
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
                    <FormItem>
                      <FormLabel>Is Urgent</FormLabel>
                      <Select
                        onValueChange={(data) =>
                          field.onChange(data === 'true' ? true : false)
                        }
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Is Urgent" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={'true'}>Yes</SelectItem>
                          <SelectItem value={'false'}>No</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  )
}

export default CreateOrderPage
