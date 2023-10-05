import styled, {css} from 'styled-components'

interface AppCardProps {
    show: boolean;
}

export const Container = styled.div`
    background-color: hsla(0, 100%, 0%, .5);
    display: grid;
    grid-template-rows: 20% 80%;
    place-items: center;
    height: 100%;
    margin: 0;
`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    height: 100%;
    width: 100%;
`
export const Title = styled.span`
    font-size: clamp(18px, 2vw, 32px);
    font-weight: bold;
`
export const ScrollAppsContainer = styled.div`
    position: relative;
    height: clamp(100px, 100%, 150px);
    width: clamp(150px, 100%, 590px);
    border-radius: 20px;
    padding-block: 20px;
    padding-inline: 10px 0px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    // border: 1px solid red;
    @scroll-timeline element-move {
        source: auto;
        orientation: vertical;
        scroll-offsets: selector(#myElement) start 0, selector(#myElement) end 0;
    }
`
export const AppCard = styled.div<AppCardProps>`
    display: inline-block;
    text-align: center;
    line-height: 125px;
    background-color: hsla(0, 100%, 0%, .5);
    border-radius: 20px;
    // border: green 1px solid;
    min-height: 125px;
    min-width: 125px;
    margin-inline: 10px;
`
export const ScrollArrows = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: none;
`
export const ScrollArrowLeft = styled.div`
    pointer-events: auto;
    width: 40px;
    height: 40px;
    background-color: #000;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const ScrollArrowRight = styled.div`
    pointer-events: auto;
    width: 40px;
    height: 40px;
    background-color: #000;
    color: #fff;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
` 