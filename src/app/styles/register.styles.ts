import styled from "styled-components";
import { adventPro, inter, antonio } from "../fonts";
import { colors } from "../styles/colors"

export const RegisterComponent = styled.div`
    display:flex;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const BgRegister = styled.div`
    background-image: url("/images/Register-Image.jpg");
    height: 100vh;
    width: 50vw;
    z-index: -1;
    background-size: cover;
    background-position: center;
    display:flex;

    & h1{
    padding: 0 10vw;
    align-self: center;
    text-align: center;
    font-size: 6rem;
    color: #fff;
    font-family: ${adventPro.style.fontFamily};

    & strong{
        font-weight: 700;
        }
    }
    
    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 1215px;

        & h1 {
            font-size: 2.4rem;
            position: absolute;
            top: 19vh;
        }
    }

    @media screen and (min-width: 768px) {
        & h1 {
            font-size: 3.06rem;
            padding: 8vh 0;
            background-color: ${colors.major.main};
            color: ${colors.commom.white};
        }
    }
`

// Forms

export const FormsContent = styled.div`
    width: 50vw;
    padding: 15vh 2vw 0 2vw;
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

    @media screen and (max-width: 768px) {
        background-color: ${colors.commom.gray};
        width: 90vw;
        position: absolute;
        padding: 3vh 5vw;
        top: 38vh;
        border-radius: 20px;

        textarea{
            height: 150px;
        }
    }

    @media screen and (min-height: 1180px) {
        padding: 20vh 5vw;
    }
`
export const FormsColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const FormsRow = styled.div`
    display: flex;
    justify-content: space-between;

@media screen and (max-width: 767px), screen and (min-height: 1180px) {
        margin: 0 auto;
        flex-direction: column;
    }
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 288px;

    @media screen and (min-height: 1180px) {
        width: 380px;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
`
