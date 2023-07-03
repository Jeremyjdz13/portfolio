import styled, {css} from 'styled-components'

interface AppCardProps {
    show: boolean;
}

export const Container = styled.div`
    background-color: hsla(0, 100%, 0%, .5);
    border: 1px solid green;
    display: grid;
    // grid-template-row: 20% 70%;
    place-items: center;
    height: 100%;
    margin: 0;
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid blue;
`
export const Title = styled.span`
    font-size: 32px;
    font-weight: bold;
`
export const ScrollAppsContainer = styled.div`
    display: flex;
    border: 1px solid red;
    justify-content: center;
    align-items: top;
    height: 100%;
    width: clamp(150px, 70%, 600px);
    overflow-x: auto;
    // overflow-y: hidden;
    white-space: nowrap;
    @scroll-timeline element-move {
        source: auto;
        orientation: vertical;
        scroll-offsets: selector(#myElement) start 0, selector(#myElement) end 0;
    }
`
export const AppCard = styled.div<AppCardProps>`
    // opacity: 0;
    transition: opacity 0.3s ease-in-out; 
    display: inline-block;
    background-color: hsla(0, 100%, 0%, .5);
    min-width: 150px;
    min-height: 150px
    margin-inline: 10px;
    ${(props) => 
        props.show &&
        css`
            opacity: 1;
        `
    };

`