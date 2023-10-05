import styled from 'styled-components'

export const Container = styled.section`
    background-color: hsla(0, 100%, 0%, .8);
    display: grid;
    grid-template-columns: 30% 70%;
    backdrop-filter: blur(10px);
    height: 100vh;
    margin: 0;
`
export const TitleContainer = styled.div`
    display: grid;
    grid-template-column: 50% 50%;
    text-align: center;
    border-right: 1px solid hsl(206, 5%, 30%);
    padding: 30px 0px;
`

export const AboutTitle = styled.span`
    font-size: clamp(14px, 5.5vw, 80px);
    font-weight: bold;
    text-shadow: 2px 2px 1px hsl(206, 5%, 30%);
`
export const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
`
export const ParagraphCard = styled.div`
    // background-color: hsla(0, 100%, 0%, .8);
    background-color: hsla(67, 100%, 99%, .7);
    width: clamp(200px, 80%, 500px);
    height: clamp(50px, 2, 130px);
    // color: hsl(206, 5%, 75%);
    color: hsla(0, 100%, 0%, .9);
    font-size: clamp(8px, 1rem, 20px);
    font-weight: bold;
    padding: 10px;
    border-radius: 20px;
    text-align: left;
    margin: 10px;

`