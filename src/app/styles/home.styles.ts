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
`;

export const MainTitle = styled.div`
    padding: 29vh 0;
    text-align: center;
    font-size: 6rem;
    color: #fff;
    font-family: ${adventPro.style.fontFamily};

    & strong{
        font-weight: 700;
    }
`;

// Defining the container styles

export const MainContent = styled.main`
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: auto;
`;

// First Component

export const FirstContent = styled.div`
    padding: 15vh 0 5vh 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;

`;

export const TextContent = styled.div`
    width: 50%;
    height: 60vh;
    display:flex;
    flex-direction: column;
    font-family: ${inter.style.fontFamily};
    justify-content: space-between;
    line-height: 1.5;

    & Button {
        padding: 2vh 3vw;
        margin: 0 auto;
        font-family: ${inter.style.fontFamily};
        font-size:2rem;
        background-color: ${colors.green.light};
        color: ${colors.commom.white};
        border-radius: 50px;
        border: 1px solid ${colors.blue.border}
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
`

// Second Content

export const SecondContent = styled.div`
    padding: 5vh 0 15vh 0;
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
`

export const CardContent = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    
    & p{
        background-color: ${colors.commom.gray};
        padding: 70px 0;
        margin-bottom: 2vh;
        border-radius: 8px;
    }
`