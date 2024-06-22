import { Order } from '@/types/order-types'

// export const OrderStatus: { [key: number]: string } = Object.freeze({
//   0: 'Design Pending',
//   1: 'Design Progress',
//   2: 'Print Pending',
//   3: 'Print Progress',
//   4: 'Packaging Pending',
//   5: 'Packaging Progress',
//   6: 'Ready For Delivery',
//   7: 'Dispatched',
//   8: 'Delivered',
// })

export enum OrderStatus{
  "DesignPending" = 0,
  "DesignProgress" = 1,
  "PrintPending" = 2,
  "PrintProgress" = 3,
  "PackagingPending" = 4,
  "PackagingProgress" = 5,
  "ReadyForDelivery" = 6,
  "Dispatched" = 7,
  "Delivered" = 8
}

// export enum OrderStatus{
//   DesignPending = 0,
//   DesignProgress = 1,
//   PrintPending = 2,
//   PrintProgress = 3,
//   PackagingPending = 4,
//   PackagingProgress = 5,
//   ReadyForDelivery = 6,
//   Dispatched = 7,
//   Delivered = 8
// }

export const orderHeaders: { [key in keyof Order]: string } = Object.freeze({
  orderId: 'Order Id',
  orderName: 'Order Name',
  orderDesc: 'Order Description',
  squareFeet: 'Square Feet',
  orderStatus: 'Order Status',
  isUrgent: 'Is Urgent',
  createdBy: 'Created By',
  assignedTo: 'Assigned To',
  createdAt: 'Created At',
  lastModifiedAt: 'Last Modified At',
  userNameOfEmp: 'User Name Of Employee',
  userNameOfCustomer: 'User Name Of Customer',
})
