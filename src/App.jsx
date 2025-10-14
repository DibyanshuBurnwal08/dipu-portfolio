import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import FileAbout from './components/FileAbout';
import FileSkills from './components/FileSkills';
import Projects from './components/FileProjects';
import Contact from './components/FileContact';
import CodingProfile from './components/codingProfle';

function App() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
  };

  return (
    <>
    <Header></Header>
    <Hero scrollToSection={scrollToSection}></Hero>
    <FileAbout></FileAbout>
    <FileSkills></FileSkills>
    <Projects></Projects>
    <CodingProfile></CodingProfile>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
