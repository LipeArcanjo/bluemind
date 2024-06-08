import styled from "styled-components";
import { adventPro, inter } from "../fonts";
import { colors } from "../styles/colors"

export const NotAuthorized = styled.main`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url("/images/BG-Homepage.jpg");

    & h1 {
        margin: 0;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: ${adventPro.style.fontFamily};
        font-size: 4.5rem;
        color: ${colors.commom.white}
    }

    @media screen and (max-width: 768px) {
        h1{
        font-size: 2rem;
        }
    }
`

export const Container = styled.div`
    font-family: ${adventPro};
    color: ${colors.commom.black};
    width: 85vw;
    margin: 20vh auto 0 auto;
    border: 2px solid ${colors.commom.gray};
    border-radius: 10px;
`;

export const Nav = styled.nav`
    background-color: ${colors.major.main};
    padding: 20px;
    color: ${colors.commom.white};
    font-size: 1.5rem;
    font-family: ${inter.style.fontFamily};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;

    & button {
        margin: 0;
        background-color: ${colors.danger};
    }
`;

export const Stats = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid ${colors.commom.gray};
    border-radius: 8px;
    margin: 5vh auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 2em;
    }
`;

export const StatItem = styled.div`
    font-family: ${inter.style.fontFamily};
    font-size: 1.2rem;
    
    .stat-number{
        font-size: 3.5rem;
        text-align: center;
        color: ${colors.danger}
        }

    & h2{
        font-weight: 700;
    } 
`;

export const Card = styled.div`
    margin: 2vh auto;
    border: 1px solid ${colors.commom.gray};
    width: 80vw;
    border-radius: 8px;
    padding: 20px;
    font-family: ${inter.style.fontFamily};
    
    .link-download {
    font-size: 0.75rem;
    }
`;

export const Loading = styled.p`
    text-align: center;
    color: ${colors.major.main};
    font-family: ${inter.style.fontFamily};
    font-size: 2rem;
    padding: 5vh 0;
`;