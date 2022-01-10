import s from './CollectionsCard.module.css'
import cn from 'classnames'
import Link from 'next/link'
import { ArrowLeft } from '@components/icons'
const CollectionsCard = ({ collection, ...props }) => {
  return (
      <li key={collection.id} className={cn(s.root)}>
        <Link
          href={`/${collection.type.toLowerCase()}/${
            collection.slug
          }`}
        >
          <a className={cn(s.link)}>
            {collection.name}
          </a>
        </Link>
        <ArrowLeft></ArrowLeft>
      </li>
  )
}

export default CollectionsCard
