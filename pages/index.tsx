import getAllProducts from '@lib/get-all-products'
import getPageData from '@lib/get-page-data'
import {ProductGrid, Hero} from '@/components'

function IndexPage({ products }) {
  return(
    <div>
      <Hero product={products[0]}></Hero>
      <ProductGrid products={products} />
    </div>
  ) 
}

export async function getStaticProps({ locale }) {
  console.log(locale)
  const pageData = await getPageData({ locale })
  const { products } = await getAllProducts({ locale })

  return {
    props: { ...pageData, products }
  }
}

export default IndexPage
