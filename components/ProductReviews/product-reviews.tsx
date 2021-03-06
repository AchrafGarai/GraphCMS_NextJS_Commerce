import * as React from 'react'
import useSWR from 'swr'
import cc from 'classcat'

import {ChevronDownSmall} from "@components/icons"
import graphcmsClient from '@lib/graphcms-client'
import { ProductReviewsQuery } from '@graphql/queries/reviews'
import {ProductReviewForm, ReviewCard} from '@/components'

function ProductReviews({ product }) {
  const [isExpanded, setIsExpanded] = React.useState(true)

  const { data, error } = useSWR(
    [ProductReviewsQuery, product.id],
    (query, productId) => graphcmsClient.request(query, { productId })
  )

  const toggleExpanded = () => setIsExpanded((expanded) => !expanded)

  return (
    <div className="mt-12 pt-6">
      <div className="border-b-2 border-opacity-10 pb-4">
        <button
          className="text-left w-full flex justify-between items-start"
          onClick={toggleExpanded}
        >
          <span className="font-medium">
            Reviews{' '}
            {data && (
              <React.Fragment>({data.reviews.aggregate.count})</React.Fragment>
            )}
          </span>
          <span className="ml-6 h-7 flex items-center">
            <ChevronDownSmall
              className={cc([
                'h-6 w-6 transform',
                isExpanded ? '-rotate-180' : 'rotate-0'
              ])}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
      {isExpanded && (
        <div className="pt-4">
          {!data ? (
            'loading'
          ) : data.reviews.aggregate.count ? (
            <div className="divide-y-2 space-y-4">
              {data.reviews.edges.map(({ node: review }) => (
                 <ReviewCard 
                    key={review.id} 
                    headline={review.headline} 
                    name={review.name} 
                    date={review.createdAt}
                    content={review.content}
                 />
              ))}
            </div>
          ) : (
            <ProductReviewForm product={product} />
          )}
        </div>
      )}
    </div>
  )
}

export default ProductReviews
