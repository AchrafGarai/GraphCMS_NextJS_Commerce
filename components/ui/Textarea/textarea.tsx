import s from './TextArea.module.css'
import cn from 'classnames'
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
                disabled={disabled}
                placeholder={placeholder}
                rows={rows}
                className={cn(s.root)}
                ref={ref}
              />
              {children}
            </fieldset>
          )
    }
  )
  export default Textarea
  
