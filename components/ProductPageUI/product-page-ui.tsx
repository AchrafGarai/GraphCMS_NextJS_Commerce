import * as React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useCart } from 'react-use-cart'
import {options} from 'graphcms.config'

import {Button} from '@components/ui'
import { Select } from '@components/ui'
import {ChevronDownSmall} from '@components/icons'
import s from './product-page-ui.module.css'
import cn from 'classnames'


import { formatCurrencyValue } from '@utils/format-currency-value'
import {ProductReviews} from '@/components'
import { useSettingsContext } from '@context/settings'

function ProductPageUI({ product }) {
  const { addItem } = useCart()
  const router = useRouter()
  const { activeCurrency } = useSettingsContext()
  const [variantQuantity, setVariantQuantity] = React.useState(1)
  const [activeVariantId, setActiveVariantId] = React.useState(
    router.query.variantId || product.variants[0].id
  )

  React.useEffect(() => {
    const url = `/products/${product.slug}?variant=${activeVariantId}`

    router.replace(url, url, { shallow: true })
  }, [activeVariantId])

  const activeVariant = product.variants.find(
    (variant) => variant.id === activeVariantId
  )
  const updateQuantity = (event) =>
    setVariantQuantity(Number(event.target.value))
  const updateVariant = (event) => setActiveVariantId(event.target.value)

  const [primaryImage] = product.images

  const addToCart = () => {
    const itemMetadata = router.locales.reduce(
      (acc, locale) => ({
        ...acc,
        [locale]: {
          ...product.localizations.find(
            (localization) => localization.locale === locale
          )
        }
      }),
      {}
    )

    addItem(
      {
        id: activeVariantId,
        productId: product.id,
        image: product.images[0],
        price: product.price,
        ...itemMetadata
      },
      variantQuantity
    )
  }

  return (
    <div className="lg:flex -mx-6">
      <div className="mb-8 px-6 md:mb-0 lg:w-1/2">
        <div className="w-full overflow-hidden relative bg-gainsboro rounded-lg">
          <Image
            src={primaryImage.url}
            height={primaryImage.height}
            width={primaryImage.width}
            alt={product.name}
            title={product.name}
          />
        </div>
      </div>
      <div className="px-6 md:py-3 lg:w-1/2">
        <div className="mb-6">
          <p className={cn(s.price)}>
            {formatCurrencyValue({
              currency: activeCurrency,
              value: product.price
            })}
          </p>
        </div>
        <h1 className={cn(s.title)}>
          {product.name}
        </h1>

        <div className="mb-16">
          <p className={cn(s.description)}>{product.description}</p>
        </div>
        <div className="md:flex md:flex-wrap -mx-3">
          {product.variants.length > 1 ? (
            <div className="md:w-3/4 px-3 mb-6">
              <label
                className={cn(s.label)}
                htmlFor="style"
              >
                Size
              </label>
              <div className="relative">
                <Select
                  className="w-full"
                  onChange={updateVariant}
                  field="Options"
                  label="Options"
                  type="text"
                  defaultValue={activeVariant.name}
                  options={product.variants.map((variant) => ({
                    label: variant.name,
                    value: variant.id
                  }))}
                >
                </Select>
                <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                  <ChevronDownSmall
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className="md:w-1/4 px-3 mb-6">
            <label
              className={cn(s.label)}
              htmlFor="quantity"
            >
              Quantity
            </label>
            <div className="relative">
              <Select
                field="quantity"
                label="quantity"
                type="text"
                defaultValue={variantQuantity}
                className="w-full"
                onChange={updateQuantity}
                options={options.map((option) => ({
                  label: option.value,
                  value: option.value
                }))}

              >
              </Select>
              <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                <ChevronDownSmall
                  className="h-4 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <Button onClick={addToCart}>Add to cart</Button>

        <ProductReviews product={product} />
      </div>
    </div>
  )
}

export default ProductPageUI
