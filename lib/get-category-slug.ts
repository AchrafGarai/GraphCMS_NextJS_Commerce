import graphcmsClient, { gql } from '@/lib/graphcms-client'
import { CategoryFragment, ProductCardFragment } from '@/lib/graphql-fragments'

export const getCategorySlugQuery = gql`
  query CategorySlugQuery($locale: Locale!, $slug: String!) {
    categories(where: { slug: $slug }, locales: [$locale, en]) {
      ...CategoryFragment
      products {
        ...ProductCardFragment
      }
    }
  }

  ${[CategoryFragment, ProductCardFragment]}
`

async function getCategoryBySlug({ locale = 'en', slug }) {
  const {
    categories: [category]
  } = await graphcmsClient.request(getCategorySlugQuery, {
    locale,
    slug
  })

  return {
    category
  }
}

export default getCategoryBySlug
