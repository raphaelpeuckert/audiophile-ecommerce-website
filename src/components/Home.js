import Header from "./Header"
import Footer from "./Footer"
import '../styles/Home.css'

export default function Home() {
    return (
        <div>
            <section id="home__hero">
                <Header />
            </section>
            <h1>This is the Home page</h1>
            <Footer />
        </div>
    )
}