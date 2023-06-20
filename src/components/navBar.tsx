import {
    StyledLink,
    MenuContainer
} from './navBarStyles'

export default function NavBar(){

    function handleScrollToView(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <MenuContainer>
            <div>
              Jeremy Diaz
            </div>
            <div>
                <span>Art</span>
                <span>Code</span>
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