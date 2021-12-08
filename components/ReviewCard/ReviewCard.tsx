import { FC } from 'react'

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
               <div className="first:pt-0 pt-4 space-y-4">
                  <div>
                    <p className="text-lg leading-6 font-medium">
                      {headline}
                    </p>
                    <p className="text-sm leading-6">
                      {name} &mdash;{' '}
                      {new Intl.DateTimeFormat('en-US', {
                        dateStyle: 'medium'
                      }).format(new Date(date))}
                    </p>
                  </div>
                  <p className="leading-5">{content}</p>
              </div>
        </div>
    )
  }
  
  export default ReviewCard
  