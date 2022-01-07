import s from './CollectionsList.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { CollectionsCard } from '@/components'
const CollectionsList = ({ collections = [], ...props }) => {
  return (
    <div
      className={cn(s.root)}
      {...props}
    >
       <ul className="space-y-4">
          {collections.map( (collection) =>(
            <CollectionsCard collection={collection}></CollectionsCard>        
          ))}
      </ul>
    </div>
  )
}

export default CollectionsList
