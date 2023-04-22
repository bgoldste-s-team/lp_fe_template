import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head';
export default function Layout({ children, pageTitle }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Navbar />
                <main className=" p-2" >{children}</main>
            <Footer />
        </>
    )
}