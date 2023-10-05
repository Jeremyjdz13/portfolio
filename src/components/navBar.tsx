import {
    StyledLink,
    NavContainer,
    MetaContainer,
    NameContainer,
    IntraPageNavContainer,
    MetaButtons
} from './styles/navBarStyles'

import { useLinkFocus } from '../hooks/useLinkFocus'

export default function NavBar(){
    const { isLinkFocused } = useLinkFocus()


    function handleScrollToView(id: string) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <NavContainer>
            <MetaContainer>
                <MetaButtons>Art</MetaButtons>
                <MetaButtons>Code</MetaButtons>
            </MetaContainer>
            <NameContainer>
              Jeremy Diaz
            </NameContainer>
            <IntraPageNavContainer>
              <StyledLink 
                to='/#home'
                onClick={() => handleScrollToView('home')}
                isLinkFocused={isLinkFocused === "home"}
                >Home</StyledLink>
              <StyledLink
                to='/#about' 
                onClick={() => handleScrollToView('about')}
                isLinkFocused={isLinkFocused === "about"}
              >About</StyledLink>
              <StyledLink 
                to='/#projects'
                onClick={() => handleScrollToView('projects')}
                isLinkFocused={isLinkFocused === "projects"}
                >Projects</StyledLink>
              <StyledLink 
                to='/#contact' 
                onClick={() => handleScrollToView('contact')}
                isLinkFocused={isLinkFocused === "contact"}

                >Contact</StyledLink>
              <StyledLink 
                to='/#resume' 
                onClick={() => handleScrollToView('resume')}
                isLinkFocused={isLinkFocused === "resume"}
              >Resume</StyledLink>
            </IntraPageNavContainer>
        </NavContainer>
    )
}