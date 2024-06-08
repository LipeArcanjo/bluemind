import styled from "styled-components";
import { adventPro , inter, antonio } from "../fonts";
import { colors } from "../styles/colors"

export const LoginContainer = styled.div`
    background: url("/images/BG-Login.jpg") no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
    z-index: -1;
    display: grid;
    
    div{
        justify-self: center;
        align-self: center;
    }
`;

export const LoginBox = styled.div`
    width: 360px;
    margin: 0 auto;
    background-color: ${colors.commom.gray};
    padding: 6vh 2vw;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    font-family: ${inter.style.fontFamily};
    opacity: 0.98;
    
    & h2 {
        margin-bottom: 5vh;
        font-family: ${antonio.style.fontFamily};
        color: ${colors.major.main};
        font-size: 2rem;
        text-align: center;
    }

    & form {
        margin: 0 auto;
        width: 300px;
        display: flex;
        flex-direction: column;
        }
        
        & label {
            display: block;
            margin: 10px 0 5px;
            }
            
        & input {
            width: 300px;
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            }
        
    & input:nth-child(4) {
        margin-bottom: 3vh;
    }
`
