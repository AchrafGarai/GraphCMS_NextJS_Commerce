import { FC } from 'react'

import s from './ReviewCard.module.css'
import cn from 'classnames'

interface ContainerProps {
    className?: string
    children?: any
    content?:string
    date?:Date
    headline?:string
    name?:string
  }

  const ReviewCard: FC <ContainerProps> = ({
    children,
    className,
    content,
    headline,
    date,
    name
  }) => {
    return (
        <div className={className}>
               <div className={cn(s.root)}>
                  <div>
                    <p className={cn(s.headline)}>
                      {headline}
                    </p>
                    <p className={cn(s.headline)}>
                      {name} &mdash;{' '}
                      {new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'medium'
                      }).format(new Date(date))}
                    </p>
                  </div>
                  <p className={cn(s.content)}>{content}</p>
              </div>
        </div>
    )
  }
  
  export default ReviewCard
  