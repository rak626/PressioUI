import { DataTable } from '@/components/DataTable'
import { orders } from '@/constants/orderData'
import { columns } from './column'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'

const OrderPage = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/login')
  }
  return (
    <div className="px-10 pt-20 min-h-screen h-full w-full mx-auto lg:w-11/12 ">
      <div className="">
        <DataTable columns={columns} data={orders} />
      </div>
    </div>
  )
}

export default OrderPage
