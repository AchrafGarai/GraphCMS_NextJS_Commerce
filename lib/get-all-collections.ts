import graphcmsClient, { gql } from '@lib/graphcms-client'
import { CollectionFragment } from '@lib/graphql-fragments'

export const getAllCollectionsQuery = gql`
  query AllCollectionsQuery($locale: Locale!) {
    collections(locales: [$locale, en]) {
      ...CollectionFragment
    }
  }

  ${CollectionFragment}
`

async function getAllCollections({ locale = 'en-US' } = {}) {
  const { collections } = await graphcmsClient.request(getAllCollectionsQuery, {
    locale
  })

  return { collections }
}

export default getAllCollections
