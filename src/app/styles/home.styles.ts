import styled from "styled-components";
import { adventPro , inter, antonio } from "../fonts";
import { colors } from "../styles/colors"

// Background Image + Title

export const BackgroundHome = styled.div`
    background-image: url("/images/BG-Homepage.jpg");
    height: 100vh;
    width: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
    display: flex;
`;

export const MainTitle = styled.div`
    margin: 0 auto;
    align-self: center;
    text-align: center;
    font-size: 6rem;
    color: #fff;
    font-family: ${adventPro.style.fontFamily};

    & strong{
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        h1{
            padding: 0 10vw ;
            font-size: 4rem;
        }
    }
`;

// Defining the container styles

export const MainContent = styled.main`
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: auto;

    @media screen and (max-width: 1024px) {
        width: 85vw;
    }
`;

// First Component

export const FirstContent = styled.div`
    margin: 5vh 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;

    @media screen and (max-width: 1023px) {
        flex-direction: column;
    }
`;

export const TextContent = styled.div`
    width: 50%;
    height: 430px;
    display:flex;
    flex-direction: column;
    font-family: ${inter.style.fontFamily};
    justify-content: space-between;
    line-height: 1.5;
    text-align: justify;
    
    & Button {
        padding: 1vh 1.5vw;
        margin: 0 auto;
        font-family: ${inter.style.fontFamily};
        font-size:1.5rem;
        background-color: ${colors.green.light};
        color: ${colors.commom.white};
        border-radius: 50px;
        border: 1px solid ${colors.blue.border}
    }
    
    & p{
        margin-bottom: 1.2vh;
    }

    @media screen and (max-width: 1023px) {
        width: 100%;
        font-size: 0.9rem;
        height: auto;

        Button {
            margin-bottom: 2vh;
        }
    }
`
export const ImageContent = styled.div`
    max-width: 420px;
    width:auto;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
    display:flex;
    justify-content:center;

    @media screen and (max-width: 1023px) {
        max-width: 85vw;
    }
`

// Second Content

export const SecondContent = styled.div`
    margin: 5vh 0;
    text-align: center;

    & h2{
        font-family: ${antonio.style.fontFamily};
        font-size: 2.5rem;
        margin-bottom: 10vh;
    }
`

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        gap: 2em;
    }

    @media screen and (max-width: 1024px) {
        flex-flow: wrap;
        justify-content: center;
        gap: 2em;
    }
`

export const CardContent = styled.div`
    width: 210px;
    display: flex;
    flex-direction: column-reverse;

    & h3{
        margin-top: 1vh;
        font-family: ${inter.style.fontFamily};
        font-size:1rem;
    }

    & :hover{
        font-size:1.0rem;
    }

    .image-card {
        border-radius: 10px;
    }

    @media screen and (max-width: 1024px) {
        width: 300px;

        .image-card {
            width: 300px;
            height:228.5px;
        }
    }
`