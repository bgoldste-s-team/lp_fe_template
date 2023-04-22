import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head';
export default function Layout({ children, pageTitle, pageDescription }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />

            </Head>
            <Navbar />
                <main className=" p-2" >{children}</main>
            <Footer />
        </>
    )
}