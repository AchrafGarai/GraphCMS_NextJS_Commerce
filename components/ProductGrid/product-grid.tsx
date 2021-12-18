import { ProductCard } from '@/components'
import s from './product-grid.module.css'
import cn from 'classNames'
function ProductGrid({ products }) {
  return (
    <div className={cn(s.root)}>
      {products.map(ProductCard)}
    </div>
  )
}

export default ProductGrid
