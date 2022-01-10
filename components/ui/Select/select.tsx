import s from './Select.module.css'
import cn from 'classnames'
import { 
  Ref,
  forwardRef,
  SelectHTMLAttributes } from "react"

import { ChevronDownSmall } from "@components/icons"

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  field:string
  className:string
  type:string
  label:string
  options: any
  defaultValue:string | number
}

const Select  = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      className,
      defaultValue = '',
      disabled,
      field,
      label,
      options,
      ...props
    },
    ref
  ) => {
    return (
      <fieldset className={className}>
        {label ? (
          <label htmlFor={field} className="sr-only">
            {label}
          </label>
        ) : null}
        <div className="relative">
          <select
            id={field}
            name={field}
            disabled={disabled}
            defaultValue={defaultValue}
            className={cn(s.root)}
            ref={ref}
            {...props}
          >
            <option disabled value="">
              Please select an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
            <ChevronDownSmall
              className="h-4 w-4 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
        {children}
      </fieldset>
    )
  }
)
export default Select
