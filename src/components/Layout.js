import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
                <main className="p-4 flex items-center " >{children}</main>
            <Footer />
        </>
    )
}