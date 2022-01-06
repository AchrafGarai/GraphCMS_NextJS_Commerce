import s from './CollectionsCard.module.css'
import cn from 'classnames'
const CollectionsCard = ({ children, ...props }) => {
  return (
    <button
      className={cn(s.root)}
      {...props}
    >
      {children}
    </button>
  )
}

export default CollectionsCard
