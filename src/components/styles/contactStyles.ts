import styled from 'styled-components'

export const Container = styled.div`
    background-color: hsla(0, 100%, 0%, .5);
    backdrop-filter: blur(10px);
    height: 100vh;
    margin: 0;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`
export const ContactCard = styled.div`
    margin: auto;
    margin-block: 30px;
`

export const Paragraph = styled.p`  
    border: red solid 1px;
`