import { Ref,forwardRef,HTMLInputTypeAttribute,InputHTMLAttributes,ReactNode } from "react"

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
          className="appearance-none min-w-0 w-full bg-white bg-opacity-10 border border-gray-300 border-opacity-10 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
          ref={ref}
        />
        {children}
      </fieldset>
    )
  }
)
export default Input