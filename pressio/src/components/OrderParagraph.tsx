import { cn } from '@/lib/utils'
import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const OrderParagraph = ({
  header,
  value,
  className = '',
}: {
  header: any
  value: any
  className?: string
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={header}>{header}</Label>
      <p className="text-gray-500 pt-1">{value}</p>
      <hr />
    </div>
  )
}

export default OrderParagraph
