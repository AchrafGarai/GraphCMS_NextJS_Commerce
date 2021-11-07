import { 
    forwardRef,
    TextareaHTMLAttributes 
} from "react"

  
export interface TeaxtareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    field:string
 
  }
  
const Textarea = forwardRef<HTMLTextAreaElement,TeaxtareaProps>(
    (
      {
        children,
        className,
        disabled = false,
        field,
        placeholder,
        rows = 4,
        type = 'text',
        ...props
      },
      ref
    ) => {
        return (
            <fieldset className={className}>
              <textarea
                id={field}
                name={field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                rows={rows}
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-4 text-base rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                ref={ref}
              />
              {children}
            </fieldset>
          )
    }
  )
  export default Textarea
  
