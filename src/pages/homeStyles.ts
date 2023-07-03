import { styled } from "styled-components";

export const Container = styled.div`
    // display: grid;
    // grid-template-column: 40% 60%;
    // height: 100%;
    text-shadow: 2px 2px 1px hsl(206, 5%, 30%);
`
export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: right;
    // height: 50vh;
    padding-inline: 30px;
    // padding-block: 50px 0px;
`
export const ParagraphCard = styled.div`
    margin-inline: auto 0px;  
    // width: clamp(200px, 40%, 600px);
    padding: 12px;
`
export const Paragraph = styled.div`
    font-weight: bold;
    text-align: justify;
    font-size: clamp(16px, 2vw, 32px);
   
`
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: bold;
    font-size: clamp(16px, 5vw, 80px);
`

export const ContentContainer = styled.div`
    backdrop-filter: blur(10px);
    // height: 1;
`

