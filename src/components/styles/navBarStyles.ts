import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
  background-color: hsla(0, 100%, 0%, .5);
  position: fixed;
  top: 0;
  // left: 0;
  z-index: 999;
  width: clamp(320px, 98%, 1155px);
  max-height: 50px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: 10% 40% 50%;
  backdrop-filter: blur(10px);
  border-bottom:hsla(0, 100%, 0%, .5) solid 2px;
  padding-inline: clamp(15px, 2%, 15px);
  padding-block: clamp(5px, 2%, 15px);
  font-weight: bold;
  font-size: clamp(12px, 2vw, 20px);
`
export const StyledLink = styled(Link)<{isLinkFocused: boolean}>`
  color: ${(props) => (props.isLinkFocused ? 'hsl(72,2%,100%)': 'hsl(72,2%,85%)')};
  margin: clamp(2.5px, .1%, 10px);
  text-decoration: none;
  transition: color 0.3s ease;
  transition: font-size 0.3s ease;

  &:hover {
    color: hsl(72,2%,100%);
    font-size: 110%;
  }
  &:focus, &:active {
    color: hsl(72,2%,100%);
    font-size: 110%;

  }
`

export const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IntraPageNavContainer = styled.div`
  justify-self: right;
`

export const NameContainer = styled.div`
  justify-self: right;

`

export const MetaButtons = styled.div`
  background-color: hsla(0, 100%, 0%, .5);
  color: hsl(72,2%,85%);
  padding-inline: 5px;
  border-radius: 5px;
  margin-inline: 10px;
  font-size: 1em; 
  transition: all 0.3s ease-in-out;

  &:hover {
    color: hsl(72,2%,100%);
    box-shadow: 0 5px 15px hsl(72,2%,100%);
`