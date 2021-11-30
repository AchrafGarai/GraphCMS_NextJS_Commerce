import s from './button.module.css'
import cn from 'classnames'
const Button = ({ children, ...props }) => {
  return (
    <button
      className={cn(s.root)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
