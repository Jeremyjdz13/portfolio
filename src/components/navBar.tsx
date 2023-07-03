import {
    StyledLink,
    MenuContainer
} from './styles/navBarStyles'

export default function NavBar(){

    function handleScrollToView(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <MenuContainer>
            <div>
                <span>Art</span>
                <span>Code</span>
                <span>Portfolio</span>
            </div>
            <div>
              Jeremy Diaz
            </div>
            <div>
              <StyledLink to='/#home' onClick={() => handleScrollToView('home')}>Home</StyledLink>
              <StyledLink to='/#about' onClick={() => handleScrollToView('about')}>About</StyledLink>
              <StyledLink to='/#projects' onClick={() => handleScrollToView('projects')}>Projects</StyledLink>
              <StyledLink to='/#contact' onClick={() => handleScrollToView('contact')}>Contact</StyledLink>
              <StyledLink to='/#resume' onClick={() => handleScrollToView('resume')}>Resume</StyledLink>
            </div>
        </MenuContainer>
    )
}