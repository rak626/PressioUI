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
    <div className="flex flex-col gap-4 mt-2">
      <Label htmlFor={header} className='text-secondary text-lg'>{header}</Label>
      <div>
        <p className="text-gray-500 pt-1 mb-2">{value}</p>
        <hr className='border-gray-500/30'/>
      </div>
    </div>
  )
}

export default OrderParagraph
