import Link from 'next/link'
import { useCart } from 'react-use-cart'
import { useUI } from '@components/ui/context'

import s from './header.module.css'
import cn from 'classnames'

import { formatCurrencyValue } from '@utils/format-currency-value'
import { Logo } from '@components/common/Logo'
import GraphCMSSVG from '@svgs/graphcms'
import  { ShoppingCart }  from '@components/icons'
import { useSettingsContext } from '@context/settings'
import classNames from 'classnames'

function Header({ pages = [] }) {
  const { cartTotal } = useCart()
  const { activeCurrency } = useSettingsContext()
  const { toggleSidebar } = useUI()

  return (
    <header className={cn(s.root)}>
      <div className="py-6 w-full">
        <nav className={cn(s.nav)}>
          <Link href="/">
            <a>
              <Logo className="h-2 text-primary w-5"></Logo>
            </a>
          </Link>
          {pages.length ? (
            <ul className="hidden md:mx-auto md:block md:flex-grow">
              {pages.map((page) => (
                <li
                  key={page.id}
                  className="block my-4 md:inline-block md:my-0"
                >
                  <Link href={`/${page.type.toLowerCase()}/${page.slug}`}>
                    <a className="text-lightgray hover:text-slategray hover:bg-gainsboro rounded-full py-2 px-3 font-medium">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex items-center">
            <button onClick={toggleSidebar}>
              <a className="flex space-x-2">
                <ShoppingCart
                  className="h-6 w-6"
                  aria-hidden="true"
                />
                <span>
                  {formatCurrencyValue({
                    currency: activeCurrency,
                    value: cartTotal
                  })}
                </span>
              </a>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
