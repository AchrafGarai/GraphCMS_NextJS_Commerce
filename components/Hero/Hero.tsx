import cn from 'classnames'
import s from './Hero.module.css'
import Image from 'next/image'

const Hero = ({ product, ...props }) => {
   // const url = product.images[0].url


    return (
        <div className={cn(s.root)}>
            <div className={cn(s.hero_img)}>
                <Image
                src="/Hero.png"
                alt="Picture of the author"
                width={800}
                height={800}
                objectFit='contain'
                />   
            </div>

            <div className={cn(s.hero_wrapper)}>
                <p className={cn(s.subtitle)}>Save Up to 50%</p>
                <h1 className={cn(s.title)}>Next store</h1>
                <p className={cn(s.subtitle)}>Free Shipping + Returns, Exclusive Products</p>
            </div>

        </div>
    )
  }
  
  export default Hero
  