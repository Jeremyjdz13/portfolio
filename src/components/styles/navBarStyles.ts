import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  max-height: 45px;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  border-bottom: hsl(206, 5%, 55%) solid 1px;
  padding: 15px;
  font-weight: bold;
  font-size: 1.2em;

  @media (max-width: 840px) {
    font-size: .8em;
  }

  @media (max-width: 450px) {
    font-size: .7em;
  }
`
export const StyledLink = styled(Link)`
  color: hsl(72,2%,85%);
  margin: 10px;
  &:focus, &:active {
    color: hsl(72,2%,100%);
  }
  &:visited {
    color: hsl(206, 5%, 55%);
  }
`