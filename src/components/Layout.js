import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
                <main className=" p-2" >{children}</main>
            <Footer />
        </>
    )
}