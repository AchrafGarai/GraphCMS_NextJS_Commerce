import Link from 'next/link'
import { useCart } from 'react-use-cart'
import { useUI } from '@components/ui/context'

import { formatCurrencyValue } from '@utils/format-currency-value'
import GraphCMSSVG from '@svgs/graphcms'
import  { ShoppingCart }  from '@components/icons'
import { useSettingsContext } from '@context/settings'

function Header({ pages = [] }) {
  const { cartTotal } = useCart()
  const { activeCurrency } = useSettingsContext()
  const { toggleSidebar } = useUI()

  return (
    <header className="max-w-7xl mx-auto bg-white flex-grow flex items-center justify-between px-4 sm:px-6">
      <div className="py-6 w-full">
        <nav className="flex items-center justify-between flex-wrap space-x-4">
          <Link href="/">
            <a>
              <GraphCMSSVG className="h-auto text-primary w-5" />
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
                  className="h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <span className="text-gray-900">
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
