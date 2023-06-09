import { useEffect, useRef, useState } from 'react'
import './App.ts'
import './App.css'
import { 
  BodyContainer, 
  AboutContainer, 
  HomeContainer,
  ContactContainer,
  ProjectsContainer,
  ResumeContainer, 
} from './App.ts'
import Home from './pages/home'
import NavBar from './components/navBar.tsx'
import About from './components/about.tsx'
import Projects from './components/projects.tsx'

function App() {

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const projectsRef = useRef(null)
  const resumeRef = useRef(null)

  const [visibleSection, setVisibleSection] = useState<String>(null)

  useEffect(() => {
    const handleScroll = () => {
      const homeRect = homeRef?.current.getBoundingClientRect();
      const aboutRect = aboutRef?.current.getBoundingClientRect();
      const contactRect = contactRef?.current.getBoundingClientRect();
      const projectsRect = projectsRef?.current.getBoundingClientRect();
      const resumeRect = resumeRef?.current.getBoundingClientRect();  
      const windowHeight = window.innerHeight;

      const threshold = windowHeight

      if (homeRect.height == windowHeight) {
        setVisibleSection('home');
      } else if (aboutRect.height == windowHeight) {
        setVisibleSection('about');
      } else if (contactRect.height === windowHeight) {
        setVisibleSection('contact');
      } else if (projectsRect.top <= windowHeight && projectsRect.bottom >= 0) {
        setVisibleSection('projects');
      } else if (resumeRect.top <= windowHeight && resumeRect.bottom >= 0) {
        setVisibleSection('resume');
      } else {
        setVisibleSection(null);
      }
      // if (homeRect.top <= windowHeight && homeRect.bottom >= 0) {
      //   setVisibleSection('home');
      // } else if (aboutRect.top <= windowHeight && aboutRect.bottom >= 0) {
      //   setVisibleSection('about');
      // } else if (contactRect.top <= 45 && contactRect.height === windowHeight) {
      //   setVisibleSection('contact');
      // } else if (projectsRect.top <= windowHeight && projectsRect.bottom >= 0) {
      //   setVisibleSection('projects');
      // } else if (resumeRect.top <= windowHeight && resumeRect.bottom >= 0) {
      //   setVisibleSection('resume');
      // } else {
      //   setVisibleSection(null);
      // }
      console.log(contactRect, "Contact Rect")
      console.log(windowHeight, "WindowHeight")
      console.log(projectsRect.top <= windowHeight && projectsRect.bottom >= 0, "Projects")
      console.log(contactRect.top <= windowHeight && contactRect.bottom >= 0, "Contact")
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BodyContainer> 
      <NavBar />
      <HomeContainer 
        ref={homeRef} 
        id="home"
        // className={visibleSection === 'home' ? 'fade-in visible' : 'fade-in'}
        >
        <Home />
      </HomeContainer>
      <AboutContainer 
        ref={aboutRef} 
        id="about"
        // className={visibleSection === 'about' ? 'fade-in visible' : 'fade-in'}
        >
        <About />
      </AboutContainer>
      <ProjectsContainer 
        ref={projectsRef} 
        id="projects"
        // className={visibleSection === 'projects' ? 'fade-in visible' : 'fade-in'}
        >
          <Projects />
      </ProjectsContainer>
      <ContactContainer 
        ref={contactRef} 
        id="contact"
        // className={visibleSection === 'contact' ? 'fade-in visible' : 'fade-in'}
        >
        <h1>Contact</h1>
      </ContactContainer>
      <ResumeContainer 
        ref={resumeRef} 
        id="resume"
        // className={visibleSection === 'resume' ? 'fade-in visible' : 'fade-in'}
        >
        <h1>Resume</h1>
      </ResumeContainer>
    </BodyContainer>
  )
}

export default App


//Note: style={{...appStyles.title, ...appStyles.blackContainer}} adding more than one property.