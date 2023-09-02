import Header from "./components/Header"
import Footer from "./components/Footer"
import './styles/Home.css'

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