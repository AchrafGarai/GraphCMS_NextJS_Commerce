import { useRouter } from 'next/router'
import Link from 'next/link'

import s from './Footer.module.css'
import cn from 'classnames'

import { GitHubIcon, TwitterIcon } from '@components/icons'
import { Select } from '@components/ui'
import {currencies,locales} from 'graphcms.config'
import { useSettingsContext } from '@context/settings'

function Footer({ categories = [], collections = [] }) {
  const router = useRouter()
  const { activeCurrency, switchCurrency } = useSettingsContext()

  const activeLocale = locales.find((locale) => locale.value === router.locale)

  const updateCurrency = (event) => {
    const currency = currencies.find(
      (currency) => currency.code === event.target.value
    )

    switchCurrency(currency)
  }

  const updateLocale = (event) => {
    const path = ['/cart'].includes(router.asPath) ? router.asPath : '/'

    router.push(path, path, { locale: event.target.value })
  }

  const currentYear = new Date().getUTCFullYear()

  return (
    <footer aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className={cn(s.root)}>
        <div className={cn(s.nav_wrapper)}>
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
              {categories.length ? (
                <div>
                  <h3 className={cn(s.Label)}>
                    Categories
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/${category.type.toLowerCase()}/${
                            category.slug
                          }`}
                        >
                          <a className={cn(s.link)}>
                            {category.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {collections.length ? (
                <div>
                  <h3 className={cn(s.Label)}>
                    Collections
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {collections.map((collection) => (
                      <li key={collection.id}>
                        <Link
                          href={`/${collection.type.toLowerCase()}/${
                            collection.slug
                          }`}
                        >
                          <a className={cn(s.link)}>
                            {collection.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className={cn(s.Label)}>
              Language &amp; Currency
            </h3>
            <form className="mt-4 space-y-4 sm:max-w-xs">
              <Select
                className="w-full"
                defaultValue={activeLocale.value}
                field="language"
                label="Language"
                onChange={updateLocale}
                options={locales}
                type="text"
              />
              <Select
                className="w-full"
                defaultValue={activeCurrency.code}
                field="currency"
                label="Currency"
                onChange={updateCurrency}
                options={currencies.map((currency) => ({
                  label: currency.code,
                  value: currency.code
                }))}
                type="text"
              />
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-500 border-opacity-10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="https://github.com/AchrafGarai/GraphCMS_NextJS_Commerce">
              <a className="text-white-400 hover:text-white-500">
                <span className="sr-only">GitHub</span>
                <GitHubIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {currentYear} Next Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
