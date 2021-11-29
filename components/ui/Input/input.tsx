import { Ref,forwardRef,HTMLInputTypeAttribute,InputHTMLAttributes,ReactNode } from "react"
import s from './input.module.css'
import cn from 'classnames'
export interface InputProps extends InputHTMLAttributes<HTMLInputTypeAttribute>{
  field:string
  className:string
}

const Input  = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      children,
      className,
      disabled = false,
      field,
      placeholder,
      type = 'text',
      ...props
    },
    ref
  ) => {
    return (
      <fieldset className={className}>
        <input
          id={field}
          name={field}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(s.root)}
          ref={ref}
        />
        {children}
      </fieldset>
    )
  }
)
export default Input