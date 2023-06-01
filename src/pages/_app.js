// pages/_app.js
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/Layout'
import siteData from "@/data/site_data.json";
import SiteContext from "@/contexts/SiteContext";
import 'tailwindcss/tailwind.css'



export const AppContext = createContext();
export default function MyApp({ Component, pageProps }) {
    const router = useRouter()
    const [theme, setTheme] = useState(siteData.theme);
    const [siteName, setSiteName] = useState(siteData.name);
    const [siteDesc, setSiteDesc] = useState(siteData.description);
    const [siteImgUrl, setSiteImgUrl] = useState(siteData.site_image);




    useEffect(() => {
        if (router.query.theme) {
            setTheme(router.query.theme)
        }
        if (router.query.siteName) {
            setSiteName(router.query.siteName);
        }
        if (router.query.siteDesc) {
            setSiteDesc(router.query.siteDesc);
        }
        if (router.query.siteImgUrl) {
            setSiteImgUrl(router.query.siteImgUrl);
        }
        const fetchSiteData = async () => {
            try {

                const siteId = process.env.NEXT_PUBLIC_SITE_ID;
                const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

                const response = await fetch(`${baseUrl}/api/sites/${siteId}`);
                // console.log(process.env)
                // const response = await fetch(`${baseUrl}/api/sites/${siteId}/`); // Replace with your API endpoint
                const data = await response.json();
                setTheme(data.theme);
                setSiteName(data.name);
                setSiteDesc(data.description);
                setSiteImgUrl(data.site_image);
            } catch (error) {
                console.error('Error fetching site data:', error);
            }
        };

        fetchSiteData();
    }, [router.query])



    return (

        <ThemeProvider attribute="class">
            <AppContext.Provider value={{ siteName, theme, siteDesc, siteImgUrl }}>
                <div data-theme={theme}>
                    <Component {...pageProps} />
                </div>
            </AppContext.Provider>
        </ThemeProvider>

    )
}
