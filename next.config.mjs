import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true
})

export default withNextra({
  basePath: '/docs',
  assetPrefix: '/docs',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Redirect the root of the domain to /docs
        source: '/',
        destination: '/docs',
        basePath: false, // This is critical: it tells Next.js to look at the true root
        permanent: false,
      },
    ]
  },
})
