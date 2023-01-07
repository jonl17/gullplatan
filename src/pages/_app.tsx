import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Layout from '~/components/Layout'
import '~/styles/globals.css'
import { linkResolver, repositoryName, createClient } from '../../prismicio'
import { AuthProvider } from '../context/auth'

function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient()
  return (
    <PrismicProvider
      client={client}
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <AuthProvider>
          <Layout pageProps={pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
