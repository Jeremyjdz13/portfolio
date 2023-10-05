import styled from 'styled-components'

export const Container = styled.div`
    // background-color: hsla(0, 100%, 0%, .5);
    // backdrop-filter: blur(10px);
    // text-shadow: 2px 2px 1px hsl(206, 5%, 30%);
    height: 100vh;
    margin: 0;
`

export const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 30px 0px;
`
export const ParagraphCard = styled.p`
    background-color: hsla(0, 100%, 0%, .1);
    // background-color: hsla(67, 100%, 99%, .9);
    width: clamp(150px, 100%, 450px);
    color: hsl(206, 5%, 75%);
    // color: hsla(0, 100%, 0%, .9);
    font-size: 1.2em;
    font-weight: bold;
    padding: 15px;
    border-radius: 20px;
    text-align: left;
    margin: 15px;

`

export const OrderListContainer = styled.div`
    width: clamp(150px, 100%, 450px);
    background-color: hsla(0, 100%, 0%, .1);
    font-size: 1.2em;
    font-weight: bold;
    padding: 15px;
    border-radius: 20px;
    margin: 15px;

`
export const ListTitle = styled.span`
    font-size: 32px;
    padding: 15px;
`
export const OrderList = styled.ol`

`

export const List = styled.li`

`