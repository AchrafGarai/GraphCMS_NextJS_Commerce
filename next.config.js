 // next.config.js
module.exports = {
  images: {
    domains: ['media.graphcms.com'],
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'de'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  }
}
