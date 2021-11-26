import Link from 'next/link'
import Image from 'next/image'

import { formatCurrencyValue } from '@utils/format-currency-value'
import { useSettingsContext } from '@context/settings'

function ProductCard({ id, images, name, price, slug }) {
  const { activeCurrency } = useSettingsContext()

  const [primaryImage] = images

  return (
    <article key={id}>
      <Link href={`/products/${slug}`}>
        <a className="group no-underline w-full h-full flex">
          <div className="bg-gray-500 bg-opacity-5 border border-gray-500 border-opacity-20 cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
            {primaryImage ? (
              <Image
                src={primaryImage.url}
                height={primaryImage.height}
                width={primaryImage.width}
                alt={name}
                title={name}
              />
            ) : null}

            <div className="pt-3 md:pt-6 text-center">
              <p className="font-semibold text-lg group-hover:text-indigo-600 mb-1">
                {name}
              </p>
              <p className="text-gray-400 text-sm">
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
