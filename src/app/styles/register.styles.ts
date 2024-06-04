import styled from "styled-components";
import { adventPro, inter, antonio } from "../fonts";
import { colors } from "../styles/colors"

export const RegisterComponent = styled.div`
    display:flex;
`

export const BgRegister = styled.div`
    background-image: url("/images/Register-Image.jpg");
    height: 100vh;
    width: 50vw;
    z-index: -1;
    background-size: cover;
    background-position: center;

    & h1{
    padding: 15vh 10vw;
    text-align: center;
    font-size: 6rem;
    color: #fff;
    font-family: ${adventPro.style.fontFamily};

    & strong{
        font-weight: 700;
    }
`

// Forms

export const FormsContent = styled.form`
    width: 50vw;
    padding: 14vh 3vw 0 3vw;
    font-family: ${inter.style.fontFamily};
    
    & label {
        margin-top: 10px;
    }

    & input,
    & select,
    & textarea {
    padding: 10px;
    border: 1px solid ${colors.commom.gray};
    border-radius: 4px;
    font-family: ${inter.style.fontFamily};
    }

    & textarea {
        height: 100px;
        resize: vertical;
        font-family: ${inter.style.fontFamily};

    }
`
export const FormsColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const FormsRow = styled.div`
    display: flex;
    gap: 15px;
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    & button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    & button[type="button"] {
    background-color: ${colors.green.dark};
    color: ${colors.commom.white};
    }

    & button[type="submit"] {
    background-color: ${colors.major.main};
    color: ${colors.commom.white};
}
`

