import * as React from 'react'

import getAllCollections from '@lib/get-all-collections'
import getCollectionBySlug from '@lib/get-collection-slug'
import getPageData from '@lib/get-page-data'
import {ProductGrid, CollectionsList} from '@/components'
import SEO from '@components/seo'
import Link from 'next/link'

function CollectionPage({ collection, footer }) {
  return (
    <React.Fragment>
      <SEO title={collection.name} {...collection} />
      <ProductGrid products={collection.products} />
      <CollectionsList {...footer}/>
    </React.Fragment>
  )
}

export async function getStaticPaths({ locales }) {
  let paths = []

  for (const locale of locales) {
    const { collections } = await getAllCollections({ locale })

    paths = [
      ...paths,
      ...collections.map((collection) => ({
        params: { slug: collection.slug },
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
  const { collection } = await getCollectionBySlug({
    locale,
    slug: params.slug
  })

  return {
    props: {
      collection,
      ...pageData
    }
  }
}

export default CollectionPage
