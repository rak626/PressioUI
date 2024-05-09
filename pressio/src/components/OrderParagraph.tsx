import { Label } from './ui/label'

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
