import s from './CollectionsList.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { CollectionsCard } from '@/components'
const CollectionsList = ({ children,collections, ...props }) => {
  return (
    <div
      className={cn(s.root)}
      {...props}
    >
       <ul className="space-y-4">
          {collections.map( (collections) =>(
            <CollectionsCard collection={collections}></CollectionsCard>        
          ))}
      </ul>
      {children}
    </div>
  )
}

export default CollectionsList
