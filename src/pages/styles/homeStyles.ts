import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    height: 96%;
    text-shadow: 2px 2px 1px hsl(206, 5%, 30%);
`
export const TopContainer = styled.div`
    display: grid;
    grid-template-rows: 60% 40%;
    padding-inline: 30px;
`
export const ParagraphCard = styled.div`
    padding-block: 30px 0px;
    
`
export const Paragraph = styled.p`
    backdrop-filter: blur(10px);
    margin-inline: 0px auto;  
    width: clamp(250px, 50%, 500px);
    padding: 10px;
    // font-weight: bold;
    text-align: left;
    font-size: clamp(18px, 2vw, 3.5vh);

    @media screen and (min-width: 1200px) {
        margin-inline: auto 0px;  
        
    }
`
export const Title = styled.h1`
    backdrop-filter: blur(10px);
    text-align: center;
    line-height: 2;
    font-weight: bold;
    font-size: clamp(22px, 5vw, 6vh);
    padding-block: 0px 15px;
    height: clamp(40px, 5vw, 6vh);
`

export const ContentContainer = styled.div`
    backdrop-filter: blur(10px);
`

