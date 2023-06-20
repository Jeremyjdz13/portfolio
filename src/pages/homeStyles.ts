import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-column: 40% 60%;
    text-shadow: 2px 2px 1px hsl(206, 5%, 30%);
    @media (max-width: 840px) {
        padding: 5px;
      }
`
export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: right;
    height: 50vh;
    padding-inline: 30px;
    padding-block: 50px 0px;
`
export const ParagraphCard = styled.div`
    margin-inline: auto 0px;  
    font-size: clamp(14px, 5vw, 32px);
    width: clamp(150px, 100%, 600px);
    padding: 12px;
`
export const Paragraph = styled.div`
    font-weight: bold;
    text-align: justify;
    @media (max-width: 840px) {
        padding: 3px;
        font-weight: normal;
      }
`
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: bold;
    font-size: clamp(16px, 5vw, 80px);
`

export const ContentContainer = styled.div`
      height: 50vh;
`

