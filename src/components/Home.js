import Header from "./Header"
import Footer from "./Footer"
import LinkBtn from "./LinkBtn"
import '../styles/Home.css'

export default function Home() {
    return (
        <div>
            <section id="home__hero">
                <Header />
                <LinkBtn text='SEE PRODUCT'/>
            </section>
            <h1>This is the Home page</h1>
            <Footer />
        </div>
    )
}