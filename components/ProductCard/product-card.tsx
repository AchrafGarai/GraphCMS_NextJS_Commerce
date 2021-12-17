import Link from 'next/link'
import Image from 'next/image'
import s from './product-card.module.css'
import cn from 'classnames'

import { formatCurrencyValue } from '@utils/format-currency-value'
import { useSettingsContext } from '@context/settings'

function ProductCard({ id, images, name, price, slug }) {
  const { activeCurrency } = useSettingsContext()

  const [primaryImage] = images

  return (
    <article key={id}>
      <Link href={`/products/${slug}`}>
        <a className="group no-underline w-full h-full flex">
          <div className={cn(s.root)}>
            {primaryImage ? (
              <Image
                src={primaryImage.url}
                height={primaryImage.height}
                width={primaryImage.width}
                alt={name}
                title={name}
              />
            ) : null}

            <div className="pt-3 md:pt-6">
              <p className={cn(s.title)}>
                {name}
              </p>
              <p className={cn(s.price)}>
                {formatCurrencyValue({
                  currency: activeCurrency,
                  value: price
                })}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default ProductCard
