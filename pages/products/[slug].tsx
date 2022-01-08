import * as React from 'react'
import getAllProducts from '@lib/get-all-products'
import getProductBySlug from '@lib/get-product-slug'
import getPageData from '@lib/get-page-data'
import {ProductPageUI} from '@/components'
import SEO from '@components/seo'
import { CollectionsList } from '@/components'

function ProductPage({ product,footer }) {
  return (
    <React.Fragment>
      <SEO title={product.name} {...product} />
      <ProductPageUI product={product} />
      <CollectionsList {...footer}/>
    </React.Fragment>
  )
}

export async function getStaticPaths({ locales }) {
  let paths = []
  for (const locale of locales ) {
    const { products } = await getAllProducts({ locale })

    paths = [
      ...paths,
      ...products.map((product) => ({
        params: { slug: product.slug },
        locale
      }))
    ]
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ locale, params }) {
  const pageData = await getPageData({ locale })
  const { product } = await getProductBySlug({
    locale,
    slug: params.slug
  })

  return {
    props: {
      product,
      ...pageData
    }
  }
}

export default ProductPage
