import { 
  Ref,
  forwardRef,
  SelectHTMLAttributes } from "react"

import { ChevronDownSmallIcon } from "@/icons/index"

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  field:string
  className:string
  type:string
  label:string
  options: any
  defaultValue:string
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
            className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <ChevronDownSmallIcon
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
