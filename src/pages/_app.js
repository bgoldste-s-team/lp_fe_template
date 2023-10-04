// pages/_app.js
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import siteData from "@/data/site_data.json";
import SiteContext from "@/contexts/SiteContext";
import 'tailwindcss/tailwind.css'


import posthog from 'posthog-js'


export const AppContext = createContext();

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
  posthog.init('phc_zybfTbvIYIVEQ0uvfhTaFYCFNT8O4ZsfGlrUNn0HWgI', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  })
}

export default function MyApp({ Component, pageProps }) {
  const theme = pageProps.site?.theme;

   const router = useRouter()
     useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog?.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <ThemeProvider attribute="class">
      <div data-theme={theme}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}