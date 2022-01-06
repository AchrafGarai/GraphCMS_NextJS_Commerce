import s from './CollectionsList.module.css'
import cn from 'classnames'
import Link from 'next/link'
const CollectionsList = ({ children,collections, ...props }) => {
  return (
    <div
      className={cn(s.root)}
      {...props}
    >
       <ul className="space-y-4">
          {collections.map((col) => (
            <li key={col.id}>
              <Link
                href={`/${col.type.toLowerCase()}/${
                  col.slug
                }`}
              >
                <a>
                  {col.name}
                </a>
              </Link>
            </li>
          ))}
      </ul>
      {children}
    </div>
  )
}

export default CollectionsList
