export const OrderStatus: { [key: number]: string } = Object.freeze({
  0: 'DESIGN_PENDING',
  1: 'DESIGN_PROGRESS',
  2: 'PRINT_PENDING',
  3: 'PRINT_PROGRESS',
  4: 'PACKAGING_PENDING',
  5: 'PACKAGING_PROGRESS',
  6: 'READY_FOR_DELIVERY',
  7: 'DISPATCHED',
  8: 'DELIVERED',
})
