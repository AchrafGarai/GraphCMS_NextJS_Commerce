import s from './CollectionsCard.module.css'
import cn from 'classnames'
import Link from 'next/link'
const CollectionsCard = ({ collection, children, ...props }) => {
  return (
      <li key={collection.id}>
        <Link
          href={`/${collection.type.toLowerCase()}/${
            collection.slug
          }`}
        >
          <a>
            {collection.name}
            {children}
          </a>
        </Link>
      </li>
  )
}

export default CollectionsCard
