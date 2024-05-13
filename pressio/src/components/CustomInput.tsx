import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full bg-transparent px-3 py-1 text-sm text-white/70 shadow-sm transition-colors border-b-2 placeholder:text-muted-foreground focus:border-red-600 focus:outline-none ',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomInput.displayName = 'CustomInput'

export { CustomInput }

// Original classes
// flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50
