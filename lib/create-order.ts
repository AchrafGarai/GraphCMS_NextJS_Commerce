import graphcmsMutationClient, { gql } from '@lib/graphcms-mutation-client'
import stripe from '@lib/stripe-client'

export const createOrderMutation = gql`
  mutation CreateOrderMutation($order: OrderCreateInput!) {
    order: createOrder(data: $order) {
      id
    }
  }
`

async function createOrder({ sessionId }) {
  const {
    customer,
    line_items,
    ...session
  } : any = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data.price.product', 'customer']
  })
  
  return await graphcmsMutationClient.request(createOrderMutation, {
    order: {
      email: customer.email,
      total: session.amount_total,
      stripeCheckoutId: session.id,
      orderItems: {
        create: line_items.data.map((item) => ({
          quantity: item.quantity,
          total: item.amount_total,
          product: {
            connect: {
              id: item.price.product.metadata.productId
            }
          }
        }))
      }
    }
  })
}
type a = {
  A:string
  B:number
}
type b = {
  C:string
  D:number
} 

export default createOrder
