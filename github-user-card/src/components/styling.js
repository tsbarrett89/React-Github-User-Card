import styled from "styled-components";

export const AppStyle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    background-color: #65C5EB;
`

export const UserCardStyle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 0 auto 3% auto;

    img {
        width: 60%;
        border-radius: 50%;
    }
`

export const FollowerGridStyle = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`