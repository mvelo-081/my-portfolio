import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects'
import Contact from '../components/Contact';
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">  
        
            <Header />
            <About />
            <Projects />
            <Contact />

        </div>
 
        
    )
}

export default HomePage;