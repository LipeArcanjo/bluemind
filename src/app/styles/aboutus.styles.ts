import styled from "styled-components";
import { adventPro, inter, antonio } from "../fonts";
import { colors } from "../styles/colors"

export const Container = styled.div`
    display: flex;
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
`

export const BrainImage = styled.div`
    background-image: url("/images/Logo-2.png");
    height: 100vh;
    width: 55vw;
    z-index: -1;
    background-size: cover;
    background-position: center;
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
`;

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Card = styled.div`
    border: 2px solid ${colors.blue.border};
    border-radius: 10px;
    display: flex;
    flex-direction: column-reverse;
    max-width: 300px;

    .image-card {
        border-radius: 10px 10px 0 0;
    }
`

export const CardContent = styled.div`
    & h3 {
        padding: 1vh 0;
        font-family: ${inter.style.fontFamily};
        line-height: 1.5;
        font-size: 1.5rem;
        border: 1px solid ${colors.blue.border};
        background-color: ${colors.major.main};
        color: ${colors.commom.white}
    }

    & h3:last-child {
        border-radius: 0 0 10px 10px;
    }   
`






