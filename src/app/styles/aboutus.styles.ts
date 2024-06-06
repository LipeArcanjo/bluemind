import styled from "styled-components";
import { adventPro, inter, antonio } from "../fonts";
import { colors } from "../styles/colors"

export const Container = styled.div`
    display: flex;

    @media screen and (max-width: 1024px) {
        display: grid;
    }
`

export const Content = styled.div`
    height: 100vh;
    width: 45vw;
    text-align: center;
    background-color: ${colors.background.darkBlue};

    & h1 {
        padding: 30vh 0;
        font-size: 6rem;
        color: ${colors.commom.white};
        font-family: ${adventPro.style.fontFamily};

        & span{
            font-weight: 700;
        }
    }

    @media screen and (max-width: 1024px) {
        background-color: transparent;
        position: relative;
        height: 0;
        width: auto;
        top: -45vh;
        z-index: 99;
        justify-self: center;
        
        & h1 {
            max-width: 210px;
            padding: 0;
            font-size: 4rem;
            }
    }
`

export const BrainImage = styled.div`
    background-image: url("/images/Logo-2.png");
    height: 100vh;
    width: 55vw;
    z-index: -1;
    background-size: cover;
    background-position: center;

    @media screen and (max-width: 1024px) {
        height: 70vh;
        width: 100vw;
    }
`

// Defining the container styles

export const MainContent = styled.main`
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: auto;
    text-align: center;
    
    & h2{
        margin: 5vh;
        font-family: ${antonio.style.fontFamily};
        font-size: 2.5rem;
    }

    @media screen and (max-width: 1024px) {
        width: 85vw;
    }
`;

export const TextContent = styled.div`
    margin: 20px 0;

    & p{
        margin: 2vh 0;
        font-family: ${inter.style.fontFamily};
        line-height: 1.2;
        font-size: 1.5rem;
        text-align: justify;
    }

    @media screen and (max-width: 768px) {
        p{
        font-size: 1rem;
        }
    }

`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 2em;
        margin: 0 auto;
    }
`

export const Card = styled.div`
    border: 2px solid ${colors.major.main};
    border-radius: 10px;
    display: flex;
    flex-direction: column-reverse;
    max-width: 255px;

    .image-card {
        border-radius: 10px 10px 0 0;
    }

    @media screen and (min-width: 600px) and (max-width:1024px){
        max-width: 180px;

        .image-card {
        max-width: 170px;
        height: 170px;
    }
    }
`

export const CardContent = styled.div`
    & h3 {
        padding: 1vh 0;
        font-family: ${inter.style.fontFamily};
        line-height: 1.5;
        font-size: 1.5rem;
        border: 1px solid ${colors.blue.light};
        background-color: ${colors.major.main};
        color: ${colors.commom.white}
    }

    & h3:last-child {
        border-radius: 0 0 10px 10px;
    }   
`






