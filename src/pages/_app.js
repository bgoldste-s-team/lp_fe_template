// pages/_app.js
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import siteData from "@/data/site_data.json";
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [theme, setTheme] = useState(siteData.theme);

    useEffect(() => {
        if (router.query.theme) {
            setTheme(router.query.theme)
        } else {
            setTheme(siteData.theme)
        }
    }, [router.query])

    if (router.query.theme && theme !== router.query.theme) return "No THeme"

    return (
        // <Layout pageTitle="Your Title" pageDescription="Your description">
        <div data-theme={theme}>
            {/*<ThemeProvider attribute="class" defaultTheme={theme}>*/}
            <Component {...pageProps} />
            {/*</ThemeProvider>*/}
        </div>
        // </Layout>
    )
}
